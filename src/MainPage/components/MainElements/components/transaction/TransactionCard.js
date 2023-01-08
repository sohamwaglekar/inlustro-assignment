import React from 'react'
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge'
import { FiMoreHorizontal } from "react-icons/fi";
import TransData from "./TransData.json";

export default function TransactionCard() {
  return (
    <div>
      {
        TransData.map(transaction => {
          return (
            
        
          <Table className='mb-0' striped key={transaction.id}>
        <tbody>
          <tr className=''>
            

       <td className='w-1/4' >
      <div className='h-12 flex justify-center items-center w-full'>
        <Badge pill bg={transaction.color}>
        {transaction.complete}
           </Badge>
             </div>
          </td>
            <td >
            <p className='text-md text-black font-semibold '>
             {transaction.card}
            </p>
              <p className='text-sm text-gray-400 '>{transaction.paymentType}</p>
          </td>
          <td >
           <p className='text-md text-black font-semibold '>
              {transaction.amount}
          </p>
             <p className='text-sm text-gray-400 '>{transaction.date}</p>
          </td>
             <td className='w-1/4'>
            <div className='h-12 flex justify-center items-center w-full'>
              <p className='text-gray-400 font-normal text-center'>{transaction.destination}</p>
           </div>
           </td>
          <td >
          <div className='h-12 flex justify-center items-center'>
            <FiMoreHorizontal className='mr-2' /> 
             </div>
           </td>
            
        </tr>
        
        </tbody>
            </Table>
              )
        })
      }
    </div>
  )
}
