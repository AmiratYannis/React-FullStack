import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navigation from '../navigation/Navigation';

const Registration = () => {

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [formErrorUsername,setFormErrorUsername]=useState("")
    const [formErrorPassword, setFormErrorPassword]=useState("")

    const onSubmit = (e)=>{
        if(username!==""&&(username.length>=3&&username.length<=15)&&password!==""&&(password.length>=4&&password.length<=20)){
            const data={
                username:username,
                password:password
            }


            axios.post("http://localhost:3001/auth",data).then(()=>{
                alert(data);
            });
        }else{
            if(username===""){
                setFormErrorUsername("You must enter a username")
            }else if(username.length<3||username.length>15){
                setFormErrorUsername("Username must have between 3 and 15 characters")
            }

            if(password===""){
                setFormErrorPassword("You must enter a password")
            }else if(password.length<4||password.length>20){
                setFormErrorUsername("Password must have between 4 and 20 characters")
            }
        }
    };


    const checkUsername=(username)=>{
        setFormErrorUsername("")
        setUsername(username)
        if(username===""){
            setFormErrorUsername("You must enter a username")
        }else if(username.length<3||username.length>15){
            setFormErrorUsername("Username must have between 3 and 15 characters")
        }
    }

    const checkPassword=(password)=>{
        setFormErrorPassword("")
        setPassword(password)
        if(password===""){
            setFormErrorPassword("You must enter a password")
        }else if(password.length<4||password.length>20){
            setFormErrorPassword("Password must have between 4 and 20 characters")
        }
    }


    return (

       
        <>
            <Navigation/>
            <div className='registration'>
                <form className='formContainer' onSubmit={onSubmit}>
                    <label>Username:</label>
                    <input
                        id='inputUsername'
                        name='username'
                        placeholder="(Ex Yannis17T872..."
                        onChange={(e)=>checkUsername(e.target.value)}
                    />

                    <p style={{color:"red"}}>{formErrorUsername}</p>

                    <label>Password:</label>
                    <input
                        id='inputPassword'
                        name='password'
                        type='password'
                        placeholder='Your password...'
                        onChange={(e)=>checkPassword(e.target.value)}
                    />


                    <p style={{color:"red"}}>{formErrorPassword}</p>

                    <button type='submit'>Register</button>

                </form>
        </div>
        </>

        
    );
};

export default Registration;