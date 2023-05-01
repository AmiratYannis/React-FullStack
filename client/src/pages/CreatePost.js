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
    const [formErrorTitle,setFormErrorTitle]=useState("")
    const [formErrorPostText,setFormErrorPostText]=useState("")
    const [formErrorUsername,setFormErrorUsername]=useState("")

    const onSubmit=(e)=>{

        if(title!==""&&postText!==""&&username!==""&&(username.length>=3&&username.length<=15)){
        
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
        }else{
            if(title===""){
                setFormErrorTitle("You must enter a Title")
            }
            if(postText===""){
                setFormErrorPostText("You must enter a post")
            }
            if(username===""){
                setFormErrorUsername("You must enter a username")
            }else if(username.length<3||username.length>15){
                setFormErrorUsername("Username must have between 3 and 15 characters")
            }
        }
        
    }

    const checkTitle=(title)=>{
        setFormErrorTitle("")
        setTitle(title);
        if(title===""){
            setFormErrorTitle("You must enter a Title")
        }

    }


    const checkPost=(postText)=>{
        setFormErrorPostText("")
        setPost(postText);
        if(postText===""){
            setFormErrorPostText("You must enter a post")
        }

    }

    const checkUsername=(username)=>{
        setFormErrorUsername("")
        setUsername(username);
        if(username===""){
            setFormErrorUsername("You must enter a username")
        }else if(username.length<3||username.length>15){
            setFormErrorUsername("Username must have between 3 and 15 characters")
        }

    }



    

    return (
        <>
        <Navigation/>
        <div className='createPostPage'>
                
                <form className='formContainer'   onSubmit={onSubmit} >
                    <label>Title:</label>
            
                    <input
                       
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex Yannis...)"
                        onChange={(e)=>checkTitle(e.target.value)}
                    />

                    <p style={{color:"red"}}>{formErrorTitle}</p>

                     <label>Post:</label>
              
                    <input
                      
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex Post...)"
                        onChange={(e)=>checkPost(e.target.value)}
                    />

                    <p style={{color:"red"}}>{formErrorPostText}</p>

                    <label>Username:</label>
                
                    <input
                        
                        id="inputCreatePost"
                        
                        name="username"
                        placeholder="(Ex Yannis17T872..."
                        onChange={(e)=>checkUsername(e.target.value)}
                    />

                    <p style={{color:"red"}}>{formErrorUsername}</p>

                    <button type='submit'>Create Post</button>
                </form>
    
            
            
        </div>
        </>
    );
};

export default CreatePost;