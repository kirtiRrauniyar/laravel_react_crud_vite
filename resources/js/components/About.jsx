import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function About() {
  return (
    <div>
        <Header />
        <div className='container'>
      <h1  className='mt-5'>About Page</h1>
      <div className="card">
  <div className="card-body">
  In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files in your main Sass file and then require it on your src/index.js or App.js file. This applies to a typical create-react-app application in other use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.
  </div>
</div>
</div>

    </div>
  )
}
