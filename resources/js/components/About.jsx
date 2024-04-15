import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </div>
  )
}
