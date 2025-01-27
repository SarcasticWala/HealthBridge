import React, { useState } from 'react'
import { assets } from '../assets/assets'
const MyPeofile = () => {
  const [userData, setUserData] = useState({
    name: "Ayan Das",
    image: assets.profile_pic,
    email: 'dasayan948@gmail.com',
    phone: '1234567890',
    address: {
      line1: 'Kolkata',
      line2: 'West Bengal',
    },
    gender: 'Male',
    dob: '01/01/2000',
  })
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="p-4 max-w-md mx-auto">
      <img src={userData.image} alt="" className="w-24 h-24 rounded-full mx-auto" />
      {
        isEdit
          ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          : <p className="text-center text-xl font-normal">{userData.name}</p>
      }
      <hr className="my-4" />
      <div>
        <p className="text-lg font-normal">CONTACT INFORMATION</p>
        <div className="my-2">
          <p className="font-semibold">Email id:</p>
          {
            isEdit
              ? <input type="text" value={userData.email} onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))} className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              : <p className="text-blue-600">{userData.email}</p>
          }
          <p className="font-semibold">Phone:</p>
          {
            isEdit
              ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              : <p className="text-blue-600">{userData.phone}</p>
          }
          <p className="font-semibold">Address:</p>
          {
            isEdit
              ? <div>
                <input onChange={(e)=> setUserData(prev =>({...prev,address:{...prev.address,line1: e.target.value}}))} value={userData.address.line1} type="text" className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input onChange={(e)=> setUserData(prev =>({...prev,address:{...prev.address,line2: e.target.value}}))} value={userData.address.line2} type="text" className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              : <p className="text-blue-600">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>
      <div>
        <p className="text-lg font-normal">BASIC INFORMATION</p>
        <div className="my-2">
          <p className="font-semibold">Gender</p>
          {
            isEdit
              ? <select onChange={(e)=> setUserData(prev =>({...prev,gender:e.target.value}))} value={userData.gender} className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Male"> Male</option>
                <option value="Female"> Female</option>
              </select>
              : <p className="text-blue-600">{userData.gender}</p>
          }
          <p className="font-semibold">Birthday:</p>
          {
            isEdit ? <input type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} className="w-full p-2 my-2 border rounded border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              : <p className="text-blue-600">{userData.dob}</p>
          }
        </div>
      </div>
      <div className="text-center">
        {
          isEdit
            ? <button onClick={() => setIsEdit(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">Save Information</button>
            : <button onClick={() => setIsEdit(true)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">Edit</button>
        }
      </div>
    </div>
  )
}

export default MyPeofile