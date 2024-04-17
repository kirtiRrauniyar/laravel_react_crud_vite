import React, { useEffect, useState } from 'react'
import Header from './Header';
// import { useHistory, Route } from 'react-router-dom';


export default function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [items, setItems] = useState([]);

    // const history = useHistory();
    let user = JSON.parse(localStorage.getItem('user-info'));
    useEffect(() => {
        if (user) {
            if(user.status_code == 200)
            {
                window.location.href = 'http://localhost/My-Folder/Laravel_react_crud/add';
            }


        }

    }, [])

    async function signup() {
        let item = { name, email, password }
        console.log(item);
        let result = await fetch("http://localhost/My-Folder/Laravel_react_crud/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.log("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        //    history.push('/add');
        window.location.href = 'http://localhost/My-Folder/Laravel_react_crud/add';
    }

    return (
        <div>
            <Header />

            <div className='container'>

                <h2 className='mt-5'>User Registration Form </h2>
                <div className="card">
                 <div className="card-body">
                <div className="form-group">
                <label>Name</label>
                <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} className='form-control' />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                  <input type="text" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                 </div>
                 <div className="form-group">
                    <label>Password</label>
                <input type="text" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} className='form-control' />
                </div>
                <br />
                <button onClick={signup} className='btn btn-primary'>Signup</button>
                </div>
                </div>
            </div>
        </div>

    )
}
