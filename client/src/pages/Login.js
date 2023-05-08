import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../navigation/Navigation';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let navigate=useNavigate()

    const login=(e)=>{
        const data={
            username:username,
            password:password
        }

        axios.post("http://localhost:3001/auth/login",data).then((response)=>{
            console.log(response)
            if(response.data.error){
                alert(response.data.error);
            }else{
                console.log(response.data)
                sessionStorage.setItem("accessToken",response.data)
                navigate("/")
            }
            
        });
    }

    return (
        <>
        <Navigation/>
        <div className='loginContainer'>
           <label>Username:</label>
           <input
                id='inputUsername'
                name='username'
                placeholder="(Ex Yannis17T872..."
                onChange={(e)=>setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
                id='inputPassword'
                name='password'
                type='password'
                placeholder='Your password...'
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>

        </div>
        </>
    );
};

export default Login;