import React from 'react'
import MainCard from './components/cards/MainCard'
import SalesChart from './components/Charts/SalesChart'
import Transaction from './components/transaction/Transaction'
import Traffic from './components/trafficSources/Traffic'
import Customer from './components/customerCard/Customer'
export default function MainElements() {
   
  return (
      <div>
      <p className=''><span className='text-black font-bold mr-2'>Hey Mariana-</span>here's what's happening with your store today</p>
      
      <div className='my-8 '>
        <MainCard />
       
      </div>
      <div className='flex justify-between mt-10'>
      <div className=' mb-8 w-2/3 pr-8'>
        <SalesChart />
       
        <Transaction/>
      </div>
      <div className='w-1/3'>
          <Traffic />
           <div className='bg-white border rounded-lg my-4 p-4'>
          <Customer />
          </div>
        </div>
        </div>
    </div>
  )
}
