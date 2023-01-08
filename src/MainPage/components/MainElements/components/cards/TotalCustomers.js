import React from 'react'
import Card from 'react-bootstrap/Card';
export default function TotalCustomers() {
  return (
    <div className='w-1/4 pr-4'>
          <Card className='w-full'>
      <Card.Body>
                  
                      <p className='text-gray-400 font-semibold text-lg'>TODAY'S SALE</p>
        
                  <Card.Text>
                      <div>
         <p className='font-bold mt-1'> $11,112</p>
                           </div>
        </Card.Text>
       
      </Card.Body>
    </Card></div>
  )
}
