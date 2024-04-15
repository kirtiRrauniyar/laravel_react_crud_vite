import React, { useEffect, useState } from 'react'
import Header from './Header';
// import { useHistory, Route } from 'react-router-dom';


export default function Registration() {
    const [name ,setName]=useState("");
    const [email ,setEmail]=useState("");
    const [password ,setPassword]=useState("");
    const [items, setItems] = useState([]);

    // const history = useHistory();
    useEffect( ()=>{
        if(localStorage.getItem('user-info'))
        {
            window.location.href = 'http://localhost/My-Folder/Laravel_react_curd/add';
        }

    },[] )

   async function signup(){
       let item  = {name,email,password}
       console.log(item);
     let result = await  fetch("http://localhost/My-Folder/Laravel_react_curd/api/register",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(item)
       })
       result = await result.json();
       console.log("result",result);
       localStorage.setItem("user-info",JSON.stringify(result));
    //    history.push('/add');
       window.location.href = 'http://localhost/My-Folder/Laravel_react_curd/add';
    }

  return (
    <div>
         <Header />
    <div className='container'>

       <h2>User Registration Form </h2>
       <input type="text" value={name} placeholder='Enter Name' onChange={ (e)=>setName(e.target.value)} className='form-control'/>
       <br/>
       <br/>
       <input type="text" value={email} placeholder='Enter Email' onChange={ (e)=>setEmail(e.target.value)} className='form-control'/>
       <br/>
       <br/>
       <input type="text" value={password} placeholder='Enter Password' onChange={ (e)=>setPassword(e.target.value)}  className='form-control'/>
       <br/>
       <br/>
       <button onClick={signup} className='btn btn-primary'>Signup</button>
    </div>
    </div>
  )
}
