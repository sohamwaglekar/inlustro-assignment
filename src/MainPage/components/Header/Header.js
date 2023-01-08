import React from 'react'
import CompanyLogo from './components/Logo'
import SearchBar from './components/SearchBar'
import ProfileIcon from './components/ProfileIcon'

import Container from 'react-bootstrap/Container';

// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
      
      <div className=''>
          <Navbar bg="light" expand="lg" className='px-8'>
      <Container fluid>
        <Navbar.Brand href="#" className='w-1/6'> <CompanyLogo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
      
                      <div className='w-1/2'> <SearchBar /></div>
                      <div className='w-2/4 flex justify-end'>
                           <ProfileIcon/>  
                      </div>
                    
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  )
}
