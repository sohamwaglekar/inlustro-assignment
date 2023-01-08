import React from 'react'



export default function CustFunction(props) {
console.log(props.id)
  return (
    
      <div className='my-2'>
      {/* <h1>{props.name}</h1> */}

      <div className='flex justify-between py-2'>
        
        <div className='flex items-center'>
           <div className='rounded-full w-10 h-10 border-2 bg-white p-1'>
              <img src={props.imgs} alt='user' className='w-full ' />
              </div>
          <div className='pl-4' >
           <div className='flex items-center'>
          <p className='font-bold'>{props.fname}</p>
            <p className='font-bold pl-2'>{props.lname}</p>
            </div>
            <p className='text-sm text-gray-400 font-semibold'>{props.email}</p>
            </div>
          
          </div>
        <div>
          <p className='mb-2 font-bold text-end'>
            ${props.postalcode}
          </p>
          <p className='text-sm text-gray-400 text-end font-semibold'>{props.city}</p>
        </div>
      </div>
      </div>
      
  )
}
