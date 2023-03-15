import React from 'react';
import { useEffect, useState} from "react";
import axios from "axios";
import Navigation from '../navigation/Navigation';
import '../App.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const [listOfPosts, setListOfPosts]=useState([])
    let navigate=useNavigate()
   

    useEffect(()=>{
        axios.get("http://localhost:3001/posts").then((response)=> {
        setListOfPosts(response.data);
        });
    },[])

  
    const changePost=(id)=>{
        navigate(`/post/${id}`)

    }

    return (
      <div className='Home'>
        <Navigation/>
        {listOfPosts.map((value, key)=>{
            return (
                <div className='post' onClick={()=>changePost(value.id)}>
                    <div className='title'>{value.title}</div>
                    <div className='postText'>{value.postText}</div>
                    <div className='username'>{value.username}</div>
                </div>
            )
      })}
            
      </div>
    );
};

export default Home;