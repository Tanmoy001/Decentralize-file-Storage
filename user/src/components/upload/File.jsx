import React from 'react'
import { MdTextSnippet } from 'react-icons/md';

import'./upload.css'
function File() {
  return (
    <div><div className='container upload_container'>
    <div className='upload_item'>
      <MdTextSnippet className='upload_item_icon'/>
   <h1>Upload</h1>
    </div>
    <div className='upload_item_2'>
      <h3>Read before you did</h3>
      <p>This is one types of storage system.You can store your file digitaly with the help of blockchain,where all of your files will be store in cloud upto <strong>30 GB</strong> and for the sign in required. For more storage visit our subscription</p>
    </div>
  </div>
  </div>
  )
}

export default File