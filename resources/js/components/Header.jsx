import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    // console.log('headeruser',user.user.name);
    function LogOut()
    {
        localStorage.clear();
        window.location.href = 'http://localhost/My-Folder/Laravel_react_crud/register';
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">ReactViteLaravel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {
                         localStorage.getItem('user-info')?
                            <>
                           { user.status_code == 200 ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">AddProduct</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/update">UpdateProduct</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item dropdown navbar-right">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.user.name}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" onClick={LogOut}>Logout</a>

                                    </div>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </>
                           }

                           </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </>

                        }

                    </ul>
                </div>
            </nav>

        </>
    )
}
