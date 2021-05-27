import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {useCookies} from 'react-cookie';// import cookies for user token jissai baar baar login na krna pdai.
import {useHistory} from 'react-router-dom'; // to change the routes 

import UserList  from './components/UserList'//import component
import {useState} from 'react' //for using useState react hooks. for getting my data
import {useEffect} from 'react' //for using useeffect react hooks. for fetching data
//usestate hookup()=its use for keep the state of the function . its use only in function base react app. not class base react aapp
//useEffect hookup()= Its use three or four function of class base react app which invoked automatically when component call first time or cmponent unmount and mount.
// so here we are using here function base react app so that we are using this hook() also but if  we having use clss base react app
// then we haved used mount and umount function here instead of hook().
function App() {
  //this is listing of the User info
  const [articles,setArticles]=useState([]) //declare and init the use state() Hook in here declare empyt array using []. it array use further when data come from the server that stroed into this empty array then we will access data
  // through the array using map.

  //this fun excute first when this component load.
  //its for seting the user info
  const [editArticle,setEditArticle]=useState(null)// it null by default
  const[token,setToken,removeToken]=useCookies(['mytoken']) // for cookies.
  let history =useHistory()

  useEffect(()=>{
      //for fetching data you can use react hook but here we r using fetch
      //so fetching data from local host using fetch.
      fetch('http://127.0.0.1:8000/detail',{
        //first we need to add method here.
        'method':'GET', //get method 
        //after it pass the header
        headers:{
          'Content-Type':'application/json', // content which type of content we will deal with
          'Authorization':`Token ${token['mytoken']}`,//Toekn beacuse access backend data we need authentication so we did token bases authentication in django backend so here we are passing token.
        }
      })
      //after it it return the promise mean responce so for responce
      .then(resp=>resp.json())// mean get the responce and convert that responce into json.
      //and also need another .then for set the responce in setArticles instance which were define above   const [articles,setArticles]=useState([]) //declare and init the use state() Hook in here declare empyt array using []

      .then(resp => setArticles(resp))  //set the respond data into setArticle instance of hook()
      //if any error will come this is for cating that error and print on console.
      .catch(error => console.log(error))
  },[]) //added empty array its depeendcy
  useEffect(()=>{
    if(!token['mytoken']){
        history.push('/') // you can use like this
       // window.location.href='/' // you can use like this also
    }
},[token])
  // we are send this editbtn fun as prop to the Userlist component.

  const editBtn = (article) =>{
    setEditArticle(article)
  }

  //for delete button
  const deleteBtn = (article) =>{
    const new_articles =articles.filter(myarticle => {
      if(myarticle.id === article.id){
        return false
      }
      return true;
    })
    
    setArticles(new_articles)
  }
// Its child component method or instance which is form.js so will add this intoo form.js while calling
  const updatedInformation=(article)=>{

    const new_article =articles.map(myarticle =>{
      if(myarticle.id === article.id)
      {
        return article
      }
      else{
        return myarticle;
      }
    })
    setArticles(new_article)
  }
  const articleForm=()=>{
    setEditArticle({Username:'',email:''}// here for insertdata form we r using setEditArticle method here intialize with empty form)

    )}
    // for insert data its update UI without refresh the button
  const  insertInformation= (article)=> {
    const new_article = [...articles, article]
    setArticles(new_article)

  }
  const logoutBtn =()=>{
    removeToken(['mytoken'])// remove saved cookies
  }
  return (
  //mapping the articles below in div
  <div className="App">

      <div className="d-block bg-dark">
      <h1 className="text-center" > REACT+DJANGO APPLICATION</h1>
      <br/>
      
      <div className='d-grid gap-5 d-md-flex justify-content-md-end'>
        <button onClick={articleForm} className ="btn btn-primary btn-lg"> Insert data</button>
        <button onClick={logoutBtn} className ="btn btn-warning">Logout</button>
      </div>
      </div>


        <br></br>
      <UserList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/> 
      
      {editArticle ? // here put the condiition if editArticle not null call the form component other nahi.
      <Form article={editArticle} updatedInformation ={updatedInformation} insertInformation={insertInformation}/>:null } 
</div>
  );

}

export default App;
