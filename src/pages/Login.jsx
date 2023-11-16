import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, Gprovider } from '../firebase';

export const Login = () => {
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigate('/');
    } catch(error) {

      console.log(error);
      return alert("Invalid email or password")
    };

  }

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, Gprovider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      console.log('Login successful');
      navigate('/');
    } catch(error) {
      console.log(error);
      return alert("Something went wrong")
    };
  }

  return (
    <div className='formContainer'>
        <div className='loginPage'>
            <span className='logo'>Financial Literacy</span>
            <span className='title'>Login</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </form>
            <p>Or</p>
            <button id='GoogleButton' onClick={handleGoogle}>Sign in with Google</button>
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}
