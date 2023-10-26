import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Swal from 'sweetalert2';


const ProjectListing = () => {

    const notificationMessage = Swal.mixin({
        showConfirmButton: false,
        timer: 6000,
        showCancelButton: false,
    })

    const [repos, setRepo] = useState([]);

    useEffect(()=> {
        axios.get('https://localhost:5001/api/StudentSubmission/approved')
        .then(response => {
            setRepo(response.data)
        })
        .catch(error => {
            console.error('An error occured getting the Projects', error)

            notificationMessage.fire({
                icon: 'error',
                title: 'An Error occured whiles fetching the submitted Projects',
                timer: '6000',
                text: 'Please refresh the page again in a few moments'
            })
        })
    }, [])

  return (
    <>
        {/* <a>
            <div className='border-2 border-solid bg-LegonContainer border-LegonGold p-3 rounded shadow-6'>
                <img src='/UGRepositoryLogo.png' className='h-full w-full object-cover object-center group-hover:opacity-75' />
                <button className='p-2 bg-LegonBlue text-LegonGold font-medium rounded mt-1.5'>Show More</button>
            </div>

            <div className='mt-0.5 border-2 border-LegonGold shadow-xl'>
            <h3 className='mt-1 text-2xl font-medium text-LegonText'>Project Title</h3>
            <p className='mt-0.5 text-md font-medium text-LegonText'>Student ID</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Department Name</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Course Code</p>

            <div className='mt-3 font-medium text-right mr-4 mb-3'>
                <button className='text-LegonGold bg-LegonBlue p-2 hover:text-LegonBlue hover:bg-LegonGold  cursor-pointer'>Show More</button>
            </div>
            
            </div>
        </a> */}

        {/* <a>
            <div className='border-2 border-solid bg-LegonContainer border-LegonGold p-3 rounded shadow-6'>
                <img src='/UGRepositoryLogo.png' className='h-full w-full object-cover object-center group-hover:opacity-75' />
            </div>

            <div className='mt-0.5 border-2 border-LegonGold shadow-xl'>
            <h3 className='mt-1 text-2xl font-medium text-LegonText'>Project Title</h3>
            <p className='mt-0.5 text-md font-medium text-LegonText'>Student ID</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Department Name</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Course Code</p>

            <div className='mt-3 font-medium text-right mr-4 mb-3'>
                <button className='text-LegonGold bg-LegonBlue p-2 hover:text-LegonBlue hover:bg-LegonGold  cursor-pointer'>Show More</button>
            </div>
            
            </div>
        </a> */}

        {/* <a>
            <div className='border-2 border-solid bg-LegonContainer border-LegonGold p-3 rounded'>
                <img src='/UGRepositoryLogo.png' className='h-full w-full object-cover object-center group-hover:opacity-75' />
            </div>

            <div className='mt-0.5 border-2  border-LegonGold'>
            <h3 className='mt-1 text-2xl font-medium text-LegonText'>Project Title</h3>
            <p className='mt-0.5 text-md font-medium text-LegonText'>Student ID</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Department Name</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Course Code</p>
            </div>
        </a> */}

        {/* <a>
            <div className='border-2 border-solid bg-LegonContainer border-LegonGold p-3 rounded'>
                <img src='/UGRepositoryLogo.png' className='h-full w-full object-cover object-center group-hover:opacity-75' />
            </div>

            <div className='mt-0.5 border-2  border-LegonGold'>
            <h3 className='mt-1 text-2xl font-medium text-LegonText'>Project Title</h3>
            <p className='mt-0.5 text-md font-medium text-LegonText'>Student ID</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Department Name</p>
            <p className='mt-0.5 text-lg font-medium text-LegonText'>Course Code</p>
            </div>
        </a> */}

        {repos.map((repo) => (
        <a>
            <div className='border-2 border-solid bg-LegonContainer border-LegonGold p-3 rounded'>
                <img src='/UGRepositoryLogo.png' className='h-full w-full object-cover object-center group-hover:opacity-75' />
            </div>

            
            <div key={repo.student_Submission_ID} className='mt-0.5 border-2  border-LegonGold'>
            <h3 className='mt-1 text-2xl font-medium text-LegonText'>{/* Project Title */} {repo.project_Title} </h3>
            <p className='mt-0.5 text-md font-medium text-LegonText'>{/* Student ID */} {repo.student_ID} </p>
            {/* <p className='mt-0.5 text-lg font-medium text-LegonText'>Department Name</p> */}
            {/* <p className='mt-0.5 text-lg font-medium text-LegonText'>Course Code</p> */}
            </div>
            
        </a>
        ))}
    </>
  )
}

export default ProjectListing
