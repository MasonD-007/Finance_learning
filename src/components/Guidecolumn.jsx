import React from 'react'
import {SearchBar} from './Searchbar';

export const GuideColumn = () => {
  return (
    <div className='guideColumn'>
      <p>GuideColumn</p>
      <SearchBar/>
      <div id='bottomPage'>
        <p>Userpage</p>
        <button id='logoutButton' onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

