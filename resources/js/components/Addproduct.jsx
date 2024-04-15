import React, { useEffect } from 'react'
import Header from './Header'
export default function Addproduct() {
    useEffect( ()=>{
        if(!localStorage.getItem('user-info'))
        {
            window.location.href = 'http://localhost/My-Folder/Laravel_react_curd/';
        }

    },[] )
  return (
    <div>
         <Header />
addpro
    </div>
  )
}
