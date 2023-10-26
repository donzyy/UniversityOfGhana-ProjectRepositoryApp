import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { VscInbox } from 'react-icons/vsc'

const CardTwo = () => {

  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    axios.get('https://localhost:5001/api/StudentSubmission')
    .then(response => {
      setTotalProjects(response.data.length)
    })
    .catch(error => {
      console.error('Error Fetching Data:', error);
    })
  },[]);

  return (
    <div className='rounded-sm border border-LegonContainer bg-white py-6 px-7.5 shadow-default '>

        <div className='flex h-11 w-11.5 items-center justify-center rounded-full bg-LegonGold'>
            <VscInbox className='fill-white' size={22} />
        </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
            <h4 className='text-title-md font-bold text-LegonBlue'>{/* 20 */} {totalProjects} </h4>
            <span className='text-sm font-medium'>Total Projects Submitted</span>
        </div>
      </div>
    </div>
  )
}

export default CardTwo
