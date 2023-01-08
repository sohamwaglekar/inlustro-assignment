import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchBar() {
  return (
    <div className="w-full">
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
      </div>
  )
}

// onChange={handleChange}
// //    value={searchInput}
