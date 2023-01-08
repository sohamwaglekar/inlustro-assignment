import React from 'react'
import { FiHome } from "react-icons/fi";

export default function Dashboard() {
  return (
      <div className='flex items-center my-10'>
          <FiHome className='mr-3' />
          <p className='text-lg font-semibold cursor-pointer'>Dashboard</p></div>
  )
}
