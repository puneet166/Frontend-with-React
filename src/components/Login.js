
import React, { useEffect } from 'react'
import {useState} from 'react' // props is unmutable so import usestate its use for declare variable and later update that particular variable
import APIService from '../APIService';
import {useCookies} from 'react-cookie';// import cookies for user token jissai baar baar login na krna pdai.
import {useHistory} from 'react-router-dom';
function Login(){
    const [username,setUsername]=useState('')
    const[password,setpassword]=useState('')
    const[token,setToken]=useCookies(['mytoken']) // for cookies.
    const[isLogin,setLogin]=useState(true)
    let history =useHistory()
    useEffect(()=>{
        if(token['mytoken']){
            history.push('/user_data')
        }
    },[token])
    const loginbtn=()=>{
        APIService.LoginUser({username,password})
        .then(resp => setToken('mytoken',resp.token))// for tooken in cookies
        .catch(error => console.log(error))

    }
    const Registerbtn =() =>{
        APIService.RegisterUser({username,password})
        .then(()=> loginbtn())
        .catch(error =>console.log(error))
    }
    return (
    <div className='App'>
    <br/>
    <br/>
    {isLogin ? <h1> Please login </h1> : <h1> Please Register </h1>}
    <h2> LOGIN  </h2>
    <br/>
    <br/>
    <div className='mb-3'>
        <input type="text" className="form-control" id='username' placeholder="enter Username here"
        value ={username} onChange ={e => setUsername(e.target.value)}/>
        <br/>
        <input type="password" className="form-control" id='password' placeholder="enter Password here"
        value ={password} onChange ={e => setpassword(e.target.value)}/>
        <br/>
        
       {isLogin ? <button onClick={loginbtn} className="btn btn-primary" >Login</button>
        :         <button onClick={Registerbtn} className="btn btn-primary" >Register</button>
   
    }

        <div className="mb-3">
            <br/>
            {isLogin ? <h5>If You Don't Have Account, Please <button className='btn btn-primary' onClick={() => setLogin(false)}>Register</button>here </h5>
            : <h5> If you have Account , Please <button className='btn btn-primary' onClick={() => setLogin(true)}>Login</button>here</h5>    
        }
        </div>
    </div>
    </div>
    )
}

export default Login