import React, {useState, useEffect} from 'react'
import { VscLayersDot } from 'react-icons/vsc'
import axios from 'axios';

const CardFive = () => {

    const [totalPendingProjects, setTotalPendingProjects] = useState(0);

    useEffect(() => {
        axios.get('https://localhost:5001/api/StudentSubmission')
        .then(response => {
        const pendingProjects = response.data.filter(
            submission => submission.submission_Status === 'Pending'
        );
        setTotalPendingProjects(pendingProjects.length)
        })
        .catch(error => {
        console.error('Error Fetching Data:', error)
        });

    }, [])

  return (
    <div className='rounded-sm border border-LegonContainer bg-white py-6 px-7.5 shadow-default '>

        <div className='flex h-11 w-11.5 items-center justify-center rounded-full bg-LegonGold'>
            <VscLayersDot className='fill-white' size={22} />
        </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
            <h4 className='text-title-md font-bold text-LegonBlue'>{/* 20 */} {totalPendingProjects} </h4>
            <span className='text-sm font-medium'>Total Projects Pending</span>
        </div>
      </div>
    </div>
  )
}

export default CardFive
