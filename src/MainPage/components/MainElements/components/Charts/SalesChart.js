import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from 'react-bootstrap/Button';

const data = [
  {
    name: 'Feb', 
    amt2: 2400,
    amt: 2400,
  },
  {
    name: 'Mar',  
    amt2: 1398,
    amt: 2210,
  },
  {
    name: 'April', 
    amt2: 9800,
    amt: 2290,
  },
  {
    name: 'May',  
    amt2: 3908,
    amt: 2000,
  },
  {
    name: 'June',  
    amt2: 4800,
    amt: 2181,
  },
  {
    name: 'July',
    amt2: 3800,
    amt: 2500,
  },
  {
    name: 'August',
    amt2: 4300,
    amt: 2100,
  },
];



export default function SalesChart()   {
  
    return (
      <div className=' bg-white p-6 border rounded-lg'>
        <div className='mb-10 flex justify-between items-center'>
          <p className='text-2xl font-bold'>Sales Report</p>
          <div>
            <Button variant="outline-secondary" className='mx-2'>12 Months</Button>
            <Button variant="outline-secondary" className='mx-2'>6 Months</Button>
            <Button variant="outline-secondary" className='mx-2'>30 Days</Button>
            <Button variant="outline-secondary" className='mx-2'>7 Days</Button>
          </div>
          <div>
            <Button variant="outline-secondary">Export PDF</Button>
          </div>
        </div>
        <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt2" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
      </div>
    )
  
}
