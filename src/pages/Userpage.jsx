import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { GuideColumn } from '../components/Guidecolumn'; //Why is there an error here?
import { Mainhome } from '../components/Mainhome';

import { useNavigate } from 'react-router-dom';

export const Userpage = () => {


  return (

    <div className='homePage'>
      <GuideColumn />
      <Mainhome />




      <div>Userpage</div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

