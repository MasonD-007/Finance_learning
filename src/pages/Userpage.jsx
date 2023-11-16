import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const Userpage = () => {


  return (

    <div className='homePage'>
      <div>Userpage</div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

