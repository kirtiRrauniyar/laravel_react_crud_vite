import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    <nav>
            <ul>
                {
                    localStorage.getItem('user-info')?
                    <>
                      <li><Link to="/add">Add Product</Link></li>
                      <li><Link to="/update">Update Product</Link></li>
                    </>
                    :
                    <>
                     <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Regiter</Link></li>
                    </>
                }



            </ul>
        </nav>
    </div>
  )
}
