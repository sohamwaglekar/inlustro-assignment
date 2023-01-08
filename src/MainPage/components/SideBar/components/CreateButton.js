import React,{useState} from 'react'
import { FiPlus } from "react-icons/fi";
import { Button } from 'react-bootstrap'
import CreateAccPopup from './CreateAccPopup';

export default function CreateButton() {
   const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
      <div className='mx-auto mb-6'>
          
      <Button className='custprimary'
        onClick={handleShow}>
              <div className='flex items-center'>
                  <FiPlus className='mr-2' />
                  <p className='font-bold'>Create New User</p>
              </div>
      </Button>
      <CreateAccPopup  show={show} closeModal={handleClose}/>
    </div>
  )
}
