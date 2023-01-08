import React from 'react'
import CustFunction from './CustFunction'


export default function CustomerCard(props) {
    // console.log(props.cust)
    return (
        
       
            props.isLoading ? <h1>Loading</h1>:
            <div>
                <p className='font-bold text-2xl  mb-1'>Recent Customers</p>
                <p className='text-sm text-gray-400 font-semibold  mb-8'>Lorem ipsum dolor sit ametis</p>
              {
                  props.cust.map(item => (
                      <CustFunction
                           className='bg-white border-2 my-4 p-8'
                          id={item.id}
                          key={item.id}
                          fname={item.firstName}
                      lname={item.lastName}
                      imgs={item.image}
                          email={item.email}
                          postalcode={item.address.postalCode}
                          city={item.address.city}
                      />
                  ))
            }
          </div>
        
      
  )
}
