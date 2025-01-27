import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div className='px-4'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p className='inline'>CONTACT </p><span className='text-gray-700 font-semibold'>US</span>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg shadow-lg' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 p-6 bg-white rounded-lg shadow-lg'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>Old Police Line, Jalpaiguri,<br />West Bengal, India</p>
          <p className='text-gray-500'>9800054895 <br /> aygakb@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at HEALTHBRIDGE</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 rounded-full'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
