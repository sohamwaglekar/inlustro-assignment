import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap'

export default function CreateAccPopup({show, closeModal }) {
    
  return (
      <div>
           <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton className='border-0'>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p  className='text-lg font-semibold'>This modal is used to create new account for users </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="success" onClick={closeModal}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
