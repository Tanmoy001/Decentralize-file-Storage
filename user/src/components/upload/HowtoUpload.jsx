import React from 'react'
import File from './File.jsx'
import Signin from './Signin.jsx'
import'./upload.css'
import User from './User.jsx'
function HowtoUpload() {
  return (
    <section className='Upload'id='Upload'>
      <h2>Step by steps</h2><br/><br/>
      <Signin/>
      <User/>
      <File/>
    </section>
  )
}

export default HowtoUpload
