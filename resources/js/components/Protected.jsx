import React from 'react'
import { useEffect} from 'react'
export default function Protected(props) {
    let Cmp = props.Cmp
    useEffect( ()=>{
        if(!localStorage.getItem('user-info'))
        {
            window.location.href = 'http://localhost/My-Folder/Laravel_react_curd/register';
        }

    },[] )
  return (
    <div>
         <Cmp/>
    </div>
  )
}
