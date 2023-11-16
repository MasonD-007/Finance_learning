import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, storage } from '../firebase'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate, Link } from 'react-router-dom'

export const Regester = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

   //Check if passwords match and are at least 8 characters
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
        return alert('Passwords do not match');
    }
    else if (password.length < 8) {
      console.log('Password must be at least 8 characters');
      return alert('Password must be at least 8 characters');
    }

    //Create user and checks if email is already in use
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      navigate('/');
    }).catch((error) => {
      if (error == "FirebaseError: Firebase: Error (auth/email-already-in-use).") {
        console.log('Email is already in use');
        return alert('Email is already in use');
      }
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return alert("Something went wrong");
    });
  }



  return (
    <>
      <div className='formContainer'>
          <div className='registerPage'>
              <span className='logo'>Financial Literacy</span>
              <span className='title'>Register</span>
              <form onSubmit={handleSubmit}>
                  <input type='text' placeholder='Display Name' />
                  <input type='email' placeholder='Email' />
                  <input type='password' placeholder='Password' />
                  <input type='password' placeholder='Confirm Password' />
                  <button>Register</button>
              </form>
              <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
      </div>
    </>
  )
}

