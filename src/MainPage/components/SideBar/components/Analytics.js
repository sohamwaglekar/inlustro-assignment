import React from 'react'
import { FiBarChart } from "react-icons/fi";
import { FiMousePointer } from "react-icons/fi";
export default function Analytics() {
  return (
      <div className='mb-10'>
          
          <div className='flex  items-center mb-4'>
          
          <p className='text-lg font-semibold text-gray-500 cursor-default'>Analytics</p></div>
          <div className='flex items-center mb-2'>
          <FiBarChart className='mr-3' />
          <p className='text-base font-normal cursor-pointer'>Performance</p></div>
          <div className='flex items-center mb-4'>
          <FiMousePointer className='mr-3 cursor-pointer' />
          <p className='text-base font-normal'>Hotjar</p></div>
          
    </div>
  )
}
