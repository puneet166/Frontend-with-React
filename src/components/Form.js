import APIService from '../APIService';// this file create for API call.
import React from 'react';
import APP from '../App';
import {useCookies} from 'react-cookie';// import cookies for user token jissai baar baar login na krna pdai.


import {useEffect} from 'react'// use effect hook for side effect.
import {useState} from 'react' // props is unmutable so import usestate its use for declare variable and later update that particular variable
// its mean we are using for change the valueb of variable using usestate.
// but in class base react app there only function state. for init the variable and setstate for set the variable or overide the value of variable.
//in function base  react app usestate.
function Form(props){

const [Username,setTitle]= useState('')// this is for edit props value or props data 
// after import each and every hook() like this first out task is declare or init everyhook like this
const [email, setDescription]= useState('') // its change another field or another textbox field. above for one text box field or variable this one is for another.
// we will decalre like this same jitnai hamarai pass data hoga ya fr jitnai text box hogai.
//its function for handle button event for update the data.
// this is for form when click on update button form will change accroding to data update.
const[token]=useCookies(['mytoken']) // for cookies.

useEffect(()=>{ // use effect with arrow function its for set the values of email and username
    setTitle(props.article.email)
    setDescription(props.article.Username)

},[props.article])
const updatedata=()=>{
    //alert(description)
    //NOTE-  make sure props.article.id,{Username,email}- in {} put your backend model column name because it will convert into json before send the data to the server.
    APIService.updatedata(props.article.id,{Username,email},token['mytoken'])// calling put API which were created in APIService file.
   // we need to send this responce to APP.js.
    .then(resp=>props.updatedInformation(resp))   //this function is notify our parent or APP.js about which article or user data has clicked or body of this function in APP.js parent component.
    .catch(error => console.log(error))

}
//for update button from update to insert data and when click on this button call Serivice API method and insert data into DB
const insertdata =()=>{
    APIService.InsertData({Username,email},token['mytoken'])
    .then(resp=> props.insertInformation(resp))
    .catch(error => console.log(error))

}
return(
        //e.target.value - capture the value of the input box and input.
        <div>
                {props.article ?(
                    <div className = "d-grid gap-2">
                        <input type="text" className="form-control" id="title" placeholder="Please enter Username"
                        value={Username} onChange ={e=>setTitle(e.target.value)} />
                            <br/>
                        
                        <input type="text" className="form-control" id="title1" placeholder="Please enter Email"
                        value={email} onChange ={e=>setDescription(e.target.value)}/>
                        <br/>
                        {// its for update button based on condition 
                            props.article.id?   <button onClick={updatedata} className = "btn btn-success">Update</button>
                            :   <button onClick={insertdata} className = "btn btn-success">Insert Data</button>


                        }
                    </div>
                ):null}
        </div>
    )
                }
export default Form