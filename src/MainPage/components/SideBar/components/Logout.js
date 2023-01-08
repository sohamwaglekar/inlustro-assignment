import React from 'react'
import { FiLogOut } from "react-icons/fi";
export default function Logout() {
  return (
     <div className='flex items-center mb-4'>
          <FiLogOut className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Logout</p></div>
  )
}
