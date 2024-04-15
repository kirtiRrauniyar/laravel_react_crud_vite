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
    <BrowserRouter basename='/My-Folder/Laravel_react_curd/'>

     <h1>Hello React Component Pages</h1>


     <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/add">Addroduct</Link></li>
            <li><Link to="/update">Updateproduct</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registration</Link></li>

        </ul>
     </nav>
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

