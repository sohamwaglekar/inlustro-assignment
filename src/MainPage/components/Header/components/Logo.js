import React from 'react'
import companyLogo from '../components/logoClearity.png'
export default function Logo() {
  return (
      <div className='w-auto flex items-center'>
          <div>
              <img src={companyLogo}
                  className="w-9"
                  alt="Company Logo" />
             
          </div>
          <div className='pl-4'>
              <h4 className='mb-0'>ClearityUI</h4>
        </div>
    </div>
  )
}
