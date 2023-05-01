import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";


const Poste = () => {
    let {id}=useParams();
    const [postObject, setPostObject]=useState({})
    const [comments,setComments]=useState([])
    const [newComment,setNewComment]=useState("")



    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=> {
            setPostObject(response.data)
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response)=> {
            setComments(response.data)
        });
    },[])

    const addComment=()=>{
        axios.post("http://localhost:3001/comments", 
                {
                    commentBody:newComment,
                    postID:id,
                },
                {
                    headers: {
                        accessToken:sessionStorage.getItem("accessToken"),
                    },
                }
            ).then((res)=>{
                if(res.data.error){
                    console.error(res.data.error);
                }else{
                    const commentToAdd={commentBody:newComment}
                    setComments([...comments,commentToAdd])
                    setNewComment("")
                    console.log("Comment added!")
                }
            });
    }

    return (
        <div className="postPage">
        <div className="leftSide">
            <div className="post" id="individual">
            <div className="title"> {postObject.title} </div>
            <div className="body">{postObject.postText}</div>
            <div className="footer">{postObject.username}</div>
            </div>
        </div>
        <div className='rightSide'>
            <div className='addCommentContainer'>
                <input type='text' placeholder='Comment' autoComplete='off' value={newComment} onChange={(e)=>{setNewComment(e.target.value)}}/>
                <button onClick={addComment}>Add Comment</button>
            </div>
            <div className='listOfComments'>
                {comments.map((comment,key)=>{
                    
                    return <div key={key} className='comment'>{comment.commentBody} </div>
                })}
            </div>
        </div>
     
    </div>
    );
};

export default Poste;