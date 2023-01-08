import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Traffic from "./Traffic.json";

export default function TrafficCard() {
  return (
      <div>
          
      {
        Traffic.map(traffic => {
          return (
            <div key={traffic.id} className="mb-4">
              <div className='flex justify-between'>
                <p className='text-black mb-1'>{traffic.trafficdata}</p>
                <p>{traffic.point}</p>
              </div>
              <div>
                <ProgressBar className='cust-progressheight' now={traffic.values} />
        
              </div>
            </div>
          )
        })
      }
      
      
      </div>
  )
}
