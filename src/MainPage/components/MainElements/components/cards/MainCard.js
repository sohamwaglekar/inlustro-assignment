import React from 'react'
import TodaySalesCard from './TodaySalesCard'
import TotalSalesCard from './TotalSalesCard'
import TotalOrderCard from './TotalOrderCard'
import TotalCustomers from './TotalCustomers'
export default function MainCard() {
  return (
      <div className='flex justify-between'>
      <TodaySalesCard /> 
      <TotalSalesCard />
      <TotalOrderCard />
      <TotalCustomers/>
    </div>
  )
}
