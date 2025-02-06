import React, { useState } from "react";
import { assets } from "../assets/assets"; // Ensure this import is correct

const Login = () => {
  const [state, setState] = useState("Admin");

  return (
   <form className='min-h-[80vh] flex  items-center '>
    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className="text-primary">{state}</span>Login</p>
        <div className="w-full">
            <p>Email</p>
            <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className="w-full">
            <p>password</p>
            <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Login</button>
        {
    state === 'Admin' ? 
    <p>Doctor Login? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Doctor')}   >click here</span></p>
    : <p>Admin Login? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}  >click here</span></p>
   }
    
    </div>
   </form>
  );
};

export default Login;
