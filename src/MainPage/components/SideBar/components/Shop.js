import React from 'react'
import { FiFolder } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";

export default function Shop() {
  return (
      <div className='mb-10'>
            <div className='flex items-center mb-4'>
          
          <p className='text-lg font-semibold text-gray-500 cursor-default'>Shop</p></div>
          <div className='flex items-center mb-2'>
          <FiFolder className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Products</p></div>
          <div className='flex items-center mb-2'>
          <FiBell className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Orders</p></div>
          <div className='flex items-center mb-4'>
          <FiBarChart2 className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Reports</p></div>
    </div>
  )
}
