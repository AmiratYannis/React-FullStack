import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";

const Poste = () => {
    let {id}=useParams();
    const [postObject, setPostObject]=useState({})



    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response)=> {
            setPostObject(response.data)
        });
    },[])

    return (
        <div className="postPage">
        <div className="centerSide">
            <div className="post" id="individual">
            <div className="title"> {postObject.title} </div>
            <div className="body">{postObject.postText}</div>
            <div className="footer">{postObject.username}</div>
            </div>
        </div>
     
    </div>
    );
};

export default Poste;