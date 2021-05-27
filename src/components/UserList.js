import React from 'react'
import APIService from '../APIService';
import {useCookies} from 'react-cookie';// import cookies for user token jissai baar baar login na krna pdai.


function UserList(props){ // getting props arugumengt its read only property use to pass data one component to another component.
    //this function is notify our parent or APP.js about which article or user data has clicked.
    const editBtn =(article)=>{
        props.editBtn(article) // this is the method we are reciving from the APP.js as a prop
    // so we are calling editbtn method of parents component from here . props.editBtn 
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
            <div className="d-block bg-info">
               
               <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>{article.Username}</p>
                   <    p> {article.email}</p>
                    </blockquote>
              
               </figure>
                            
               
                <div className = "d-grid gap-2 col-2 mx-auto">
                
                <button className ="btn btn-outline-primary" onClick={()=>editBtn(article)}>Update</button>
    
        
                <button className ="btn btn-outline-danger" onClick={()=>deleteBtn(article)}>Delete </button>
    
                </div>
                <hr className="hrclass"/>
            </div>
                )
             })}
        </div>
        
    )
}
export default UserList