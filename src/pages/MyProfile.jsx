import React from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  
  return (
    <div>
      <div className='flex flex-col'>
            <img className='w-40 h-40' src={assets.profile_pic} alt="" />
            <p className='mt-4 font-bold text-4xl'>Hritik Roshan</p>
            <hr className='w-60' />
            
            <div>
              <h1 className='font-bold mt-3 border-b-1 w-30'>Contact Info</h1>
              <p className='!text-gray-900'>Email:    roshna@gmail.com</p>
              <p className='!text-gray-900'>Phone:    1234567890</p>
              <p className='!text-gray-900'>Address:   Chengdu,China</p>
            </div>
            
            <div>
              <h1 className='font-bold mt-3 border-b-1 w-30'>Basic Info</h1>
              <p className='!text-gray-900'>Gender:   Male</p>
              <p className='!text-gray-900'>BirthDay:   29th feb 2004</p>
            </div>
            
            <div className='mt-8 flex gap-10'>
              <button className='border rounded-lg px-7 py-2 cursor-pointer hover:bg-green-900 hover:!text-white'>Edit</button>
              <button className='border rounded-lg px-7 py-2 cursor-pointer hover:bg-red-700 hover:!text-white'>Delete Account</button>
            </div>
            
      </div>
    </div>
  )
}

export default MyProfile
