import React from 'react'
import TransactionCard from './TransactionCard'
export default function Transaction() {
  return (
      <div className='bg-white rounded-lg border p-4 my-8'>
          <p className='font-bold text-2xl mb-1'>Transaction</p>
          <p className='text-sm text-gray-400 font-semibold'>Lorem ipsum dolor sit ametis</p>

          <div className='mt-8'>
              <TransactionCard/>
          </div>
    </div>
  )
}
