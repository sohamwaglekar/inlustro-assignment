import React from 'react'

import companyLogo from '../components/logoClearity.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiMessageSquare } from "react-icons/fi";
import { FiBell } from "react-icons/fi";


export default function ProfileIcon() {
  return (
      <div className='flex justify-center items-center w-full'>
          <div>
              <FiMessageSquare className='text-xl'/>
          </div>
          <div className='pl-16'>
              <FiBell className='text-xl'/>
          </div>
         
          {/* <img src={companyLogo} className="w-12" alt="Company Logo" /> */}
          <div className='pl-16'>
            
               <NavDropdown title={
                    <div className="pull-left">
                        <img className="thumbnail-image w-6" 
              src={companyLogo} 
              
                            alt="user pic"
                        />

                        
                    </div>
                }
          id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='mb-2'>
              Sign out
              </NavDropdown.Item>
             
            </NavDropdown>
          </div>
    </div>
  )
}


