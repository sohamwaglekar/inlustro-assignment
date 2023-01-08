import React from 'react'
import { FiBarChart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

export default function Support() {
  return (
      <div className='mb-10'>
           <div className='flex items-center mb-4'>
          
          <p className='text-lg font-semibold text-gray-500 cursor-default'>Support</p></div>
          <div className='flex items-center mb-2'>
          <FiBarChart className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Tickets</p></div>
          <div className='flex items-center mb-2'>
          <FiUser className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Agents</p></div>
          <div className='flex items-center mb-4'>
          <FiUsers className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Customers</p></div>
    </div>
  )
}
