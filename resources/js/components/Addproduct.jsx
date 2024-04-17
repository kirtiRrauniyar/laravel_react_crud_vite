import React, { useEffect, useState } from 'react'
import Header from './Header'
export default function Addproduct() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            window.location.href = 'http://localhost/My-Folder/Laravel_react_crud/';
        }
        else {
            if (user.status_code == 400) {
                window.location.href = 'http://localhost/My-Folder/Laravel_react_crud/';
            }
        }

    }, [])
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file_path, setFile] = useState([]);
    function addProduct()
    {
        console.log(name,file,price,description);
    }
    return (
        <div>
            <Header />
            <div className='container'>

                <h2 className='mt-5'>Add Product </h2>
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="text" value={price} placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" value={description} placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label>File Path</label>
                            <input type="file" value={file_path} placeholder='Enter Description' onChange={(e) => setFile(e.target.files[0])} className='form-control' />
                        </div>
                        <br />
                        <button onClick={addProduct} className='btn btn-primary'>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
