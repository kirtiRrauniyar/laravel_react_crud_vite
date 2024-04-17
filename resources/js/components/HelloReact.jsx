import React from 'react'
import ReactDOM  from 'react-dom/client'
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Addproduct from './Addproduct'
import Updateproduct from './Updateproduct'
import Login from './Login'
import Registration from './Registration'



export default function HelloReact() {
  return (
    <BrowserRouter basename='/My-Folder/Laravel_react_crud/'>

     {/* <h1>Hello React Component Pages</h1> */}



    <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/add" element={<Addproduct />} />
         <Route path="/update" element={<Updateproduct />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Registration />} />
    </Routes>

    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('app')).render(<HelloReact/>);

