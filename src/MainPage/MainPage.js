import React from 'react'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import MainElements from './components/MainElements/MainElements'
export default function MainPage() {
  return (
      <div>
      <Header />
      <div className='flex cust-fbfbfb py-8'>
      <div className='w-2/12 '>
        <SideBar />
        </div>
        <div className='w-10/12 px-10'>
          <MainElements/>
        </div>
      </div>
    </div>
  )
}
