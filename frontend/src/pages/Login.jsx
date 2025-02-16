import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) navigate('/dashboard'); // Redirect if already logged in
  }, [navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    try {
      const url = `${process.env.REACT_APP_BACKEND_URL}/api/auth/${state === 'Sign Up' ? 'register' : 'login'}`;
      const payload = state === 'Sign Up' ? { name, email, password } : { email, password };
      const { data } = await axios.post(url, payload);
      
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to continue.</p>
        
        {state === 'Sign Up' && (
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        )}
        
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} value={password} required />
          <div className='mt-1'>
            <input type='checkbox' onChange={() => setShowPassword(!showPassword)} /> Show Password
          </div>
        </div>
        
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        
        {state === 'Sign Up' ? (
          <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        ) : (
          <p>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Sign up here</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
