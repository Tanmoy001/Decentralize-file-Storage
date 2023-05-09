import React from 'react'
import { BiUserCheck } from 'react-icons/bi';
function User() {
  return (
    <div><div className='container upload_container'>
    <div className='upload_item'>
      <BiUserCheck className='upload_item_icon'/>
      <h1>User</h1>
    </div>
    <div className='upload_item_2'>
      <h3>Read before you did</h3>
      <p>After login into the system you will get to see your own profile with a dashboard where you can see all the features.Enjoy the sites and uploads the files as much as you can.</p>
    </div>
  </div>
  </div>
  )
}

export default User