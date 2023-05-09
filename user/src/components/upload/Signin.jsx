import React from 'react'
import { GoSignIn } from 'react-icons/go';

function Signin() {
  return (
    <div><div className='container upload_container'>
    <div className='upload_item'>
      <GoSignIn className='upload_item_icon'/>
      <h1>SignIn</h1>
    </div>
    <div className='upload_item_2'>
      <h3>Read before you did</h3>
      <p>At first you have to signIn for utilizing all the features properly.After login into the site you will get the acess of all the things.</p>
    </div>
  </div>
  </div>
  )
}

export default Signin