import React from 'react';
import Navigation from '../navigation/Navigation';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


import axios from 'axios';


const CreatePost = () => {


    let navigate=useNavigate()
    const [title, setTitle]=useState("")
    const [postText, setPost]=useState("")
    const [username,setUsername]=useState("")

    const onSubmit=(e)=>{
        const data={
            title:title,
            postText:postText,
            username:username
        }
        axios.post("http://localhost:3001/posts",data)
        .then((response)=> {
            console.log(response.data)
            navigate("/")
        }).catch((error)=>{console.log(error);});
    }

   /* const validationSchema= Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username:  Yup.string().min(3).max(15).required()

    })*/

    

    return (
        <div className='createPostPage'>
                <Navigation/>
                <form className='formContainer'   onSubmit={onSubmit} >
                    <label>Title:</label>
            
                    <input
                       
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex Yannis...)"
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                     <label>Post:</label>
              
                    <input
                      
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex Post...)"
                        onChange={(e)=>setPost(e.target.value)}
                    />
                    <label>Username:</label>
                
                    <input
                        
                        id="inputCreatePost"
                        name="username"
                        placeholder="(Ex Yannis17T872..."
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                    <button type='submit'>Create Post</button>
                </form>
    
            
            
        </div>
    );
};

export default CreatePost;