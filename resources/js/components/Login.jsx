import React from 'react'
import Header from './Header'
import { useEffect} from 'react'

export default function Login() {
    useEffect( ()=>{
        if(localStorage.getItem('user-info'))
        {
            window.location.href = 'http://localhost/My-Folder/Laravel_react_curd/add';
        }

    },[] )
  return (
    <div>
         <Header />
     login
    </div>
  )
}
