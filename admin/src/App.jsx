import React, { useContext } from 'react'
import Login from './pages/login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllApointments from './pages/Admin/AllApointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';
const App = () => {
  const {aToken}=useContext(AdminContext)
  return aToken ?(
    <div className='bg-[#F8F9FD]' >
 <ToastContainer/>
 <Navbar/>
 <div className='flex items-start'>
  <Sidebar/>
  <Routes>
    <Route path='/' element={<></>} />
    <Route path='/admin-dashbord' element={<Dashboard/>} />
    <Route path='/all-appointments' element={<AllApointments/>} />
    <Route path='/add-doctor' element={<AddDoctor/>} />
    <Route path='/doctor-list' element={<DoctorList/>} />
  
  
  </Routes>
 </div>
    </div>
  ) :(
    <>
         <Login/>
         <ToastContainer/>
    </>
  )
}

export default App