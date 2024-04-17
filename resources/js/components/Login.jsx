import React from 'react'
import Header from './Header'
import { useEffect,useState } from 'react'

export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function signIn() {
       console.log(email,password);
       let item = { email, password }
       let result = await fetch("http://localhost/My-Folder/Laravel_react_crud/api/login", {
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


            if(result.status_code == 200)
            {
                window.location.href = 'http://localhost/My-Folder/Laravel_react_crud/add';
            }



    }
    let user = JSON.parse(localStorage.getItem('user-info'));
    // console.log(user)

    return (
        <div>
            <Header />
            <div className='container'>

                <h2 className='mt-5'>User Login Form </h2>
                <div className="card">
                    <div className="card-body">
                    {
                         localStorage.getItem('user-info')?
                            <>
                                {
                                user.status_code == 400?
                                <>
                                  <p>Email or Password is incorrect!!</p>
                                </>
                                :

                                <>

                                </>
                               }
                            </>
                            :
                            <>
                            </>
                    }





                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <button onClick={signIn} className='btn btn-primary'>SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
