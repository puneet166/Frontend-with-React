import React from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';// import cookies for user token jissai baar baar login na krna pdai.


function UserList(props){ // getting props arugumengt its read only property use to pass data one component to another component.
    //this function is notify our parent or APP.js about which article or user data has clicked.
    const editBtn =(article)=>{
        props.editBtn(article) // this is the method we are reciving from the APP.js as a prop
    }
    const deleteBtn =(article)=>{
        APIService.DeleteData(article.id,token['mytoken'])
        .then(resp => props.deleteBtn(article))
         // this is the method we are reciving from the APP.js as a prop
    }
    const[token]=useCookies(['mytoken']) // for cookies.

    return(
        <div>
            
            
            {props.articles && props.articles.map(article =>{// here mapping the article
            return (
            // here showing the fetched data
            <div>
            
                <h2>{article.Username}</h2>
                <p>{article.email}</p>
                <div className = "row">
                <div className ="col-md-1">
                <button className ="btn btn-primary" onClick={()=>editBtn(article)}>Update</button>
                </div>
                <div className ="col">
                <button className ="btn btn-danger" onClick={()=>deleteBtn(article)}>Delete </button>
                </div>
                </div>
                <hr className="hrclass"/>
            </div>
                )
             })}
        </div>
        
    )
}
export default UserList