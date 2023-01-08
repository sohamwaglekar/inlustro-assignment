import React, {useState,useEffect} from 'react'
import CustomerCard from './CustomerCard';


export default function Customer(props) {
      const [cust, setRecentcust] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
  
    
    useEffect(() => {
        const fetchHandler = async () => {
            const response = await fetch('https://dummyjson.com/users?limit=4&skip=10&select=firstName,lastName,email,address,image')
            const responseData = await response.json();
            setRecentcust(responseData.users);
            console.log(responseData);
            setIsLoading(false);
        }
        fetchHandler();

    },[])
    
  return (
      
    <CustomerCard 
     
       cust={cust}
              isLoading={isLoading} />
  )
}
