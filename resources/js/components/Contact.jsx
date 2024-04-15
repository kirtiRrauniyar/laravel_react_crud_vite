import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>

    </div>
  )
}
