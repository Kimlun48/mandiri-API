import React from 'react';
import './LoginForm.css';
import { iconsImgs } from "../utils/images";
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/authProvider';
import axios from '../api/axios';



export const LoginForm = () => {

  const {setAuth}= useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();
  const [user,setUser] = useState('');
  const [pwd,setPwd] = useState('');
  const [errMsg,setErrMsg] = useState('');
  const [success,setSuccess] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
        history.push('/login');
    }
  }, []);

  useEffect(() => {
    userRef.current.focus();
  },[])

  useEffect(() => {
    setErrMsg('');
  },[user,pwd])

  const handleSubmit = async (e) => {
    setLoading(true);
    e.prevenDefault();
  
    
    try {
        const response = await axios.post('http://10.1.2.148:8009',
          JSON.stringify({user, pwd}),
          
          {
            headers: {'content-type': 'application/json'},
            withCredentials: true 
          }
        );
    
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
      const accesToken = response?.data?.accesToken;
      const roles = response?.data?.roles;
          setAuth({user, pwd, roles, accesToken})
          setUser('');
          setPwd('');
          setSuccess(true);

    } catch (err) {
              if(!err?.response) {
                setErrMsg('No Server Response');
              } else if (err.response?.status === 400) {
                  setErrMsg('Missing Username or Password');
              } else if (err.response?.status === 401) {
                  setErrMsg('Unauthorized');
              } else {
                setErrMsg('Login failed');
              }
              errRef.current.focus();
     }
 
  }

  return (
    <>
          {success ? (
              <section>
                  <h1>You are logged in!</h1>
                  <br />
                  <p>
                      <a href="#">Go to Home</a>
                  </p>
              </section>
          ) : (
    
          <div>
        <img className='logo' src={ iconsImgs.anyargroup } />
      <div className="wrapper">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

        <h1 className='content-top-title'> Mandiri</h1>
        <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <input type='text' placeholder='Username'ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={user} required
          />
             <img className='user' src={ iconsImgs.user } />
        </div>

        <div className='input-box'>
        <input type='password' placeholder='Password'ref={userRef}
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd} required
          />
          <img className='user' src={ iconsImgs.user } />
          </div>
          
        <button className='text-white' type='submit'>Login</button>
        
      </form>
      
            </div>
      </div>
            )}
      </>
  )
}
    
    

export default LoginForm