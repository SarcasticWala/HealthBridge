import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddDoctor = () => {
  // State variables
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 year');
  const [fees, setFees] = useState('');
  const [speciality, setSpeciality] = useState('General Physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [about, setAbout] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // API call
    try {
      if (!docImg) {
        return toast.error('Image not selected');
      }
      const formData = new FormData();
      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } });
      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName('');
        setPassword('');
        setEmail('');
        setAddress1('');
        setAddress2('');
        setAbout('');
        setFees('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="p-4 md:p-8 bg-white rounded-xl shadow-lg max-w-4xl mx-auto">
      <p className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-8">Add Doctor</p>
      <div className="flex flex-col items-center mb-5 md:mb-8">
        <label htmlFor="doc-img" className="cursor-pointer hover:opacity-80 transition-opacity">
          <img src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full border-4 border-blue-100 shadow-md" />
        </label>
        <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="file" id="doc-img" hidden />
        <p className="text-center text-gray-600 font-medium">Upload doctor picture</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Doctor Name</p>
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Doctor Email</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Doctor Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Doctor Experience</p>
            <select onChange={(e) => setExperience(e.target.value)} value={experience} className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
              <option value="1 Year">1 Year</option>
              <option value="2 Years">2 Years</option>
              <option value="3 Years">3 Years</option>
              <option value="4 Years">4 Years</option>
              <option value="5 Years">5 Years</option>
              <option value="6 Years">6 Years</option>
              <option value="7 Years">7 Years</option>
              <option value="8 Years">8 Years</option>
              <option value="9 Years">9 Years</option>
              <option value="10 Years">10 Years</option>
            </select>
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Fees</p>
            <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
          </div>
        </div>
        <div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Speciality</p>
            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Education</p>
            <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="Education" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">Address</p>
            <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg mb-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
            <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required />
          </div>
          <div className="mb-4 md:mb-6">
            <p className="font-semibold text-gray-700 mb-2">About Doctor</p>
            <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write about doctor" rows={5} className="w-full p-2 md:p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 md:p-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md">
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;