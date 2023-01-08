import React from 'react'
import { FiSettings } from "react-icons/fi";
export default function Settings() {
  return (
     <div className='flex items-center mt-16 mb-4'>
          <FiSettings className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Settings</p></div>
  )
}
