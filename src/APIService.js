import {useCookies} from 'react-cookie';// import cookies for user token jissai baar baar login na krna pdai.

export default class APIService{
    //its for update data
    static updatedata(article_id,body,token){
        return fetch(`http://127.0.0.1:8000/detail/${article_id}/`,{
            'method':'PUT', //PUT method for update
            headers:{
                'Content-Type':'application/json', // content which type of content we will deal with
                'Authorization':`Token ${token}`//Toekn beacuse access backend data we need authentication so we did token bases authentication in django backend so here we are passing token.
              },
              body:JSON.stringify(body)// for put we add body like this in header
            
        }).then(resp => resp.json())
    }
    // for insert data
    static InsertData(body, token){
        return fetch('http://127.0.0.1:8000/detail',{
            'method':'POST', //PUT method for update
            headers:{
                'Content-Type':'application/json', // content which type of content we will deal with
                'Authorization':`Token ${token}`,//Toekn beacuse access backend data we need authentication so we did token bases authentication in django backend so here we are passing token.
              },
              body:JSON.stringify(body)// for put we add body like this in header
            
        }).then(resp => resp.json())
    }
// delete the data API

    static DeleteData(user_id, token){
        return fetch(`http://127.0.0.1:8000/detail/${user_id}/`,{
            'method':'DELETE', //PUT method for update
            headers:{
                'Content-Type':'application/json', // content which type of content we will deal with
                'Authorization':`Token ${token}`,//Toekn beacuse access backend data we need authentication so we did token bases authentication in django backend so here we are passing token.
              }
            
        })
    }
    static LoginUser(body){
        return fetch('http://127.0.0.1:8000/auth/',{
            'method':'POST', //PUT method for update
            headers:{
                'Content-Type':'application/json', // content which type of content we will deal with
              },
              body:JSON.stringify(body)// for put we add body like this in header
            
        }).then(resp => resp.json())
    }
// for regiteration
    static RegisterUser(body){
        return fetch('http://127.0.0.1:8000/user_details',{
            'method':'POST', //PUT method for update
            headers:{
                'Content-Type':'application/json', // content which type of content we will deal with
              },
              body:JSON.stringify(body)// for put we add body like this in header
            
        }).then(resp => resp.json())
    }
    }
