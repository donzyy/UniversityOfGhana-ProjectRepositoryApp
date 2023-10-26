import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { VscDesktopDownload, VscEdit} from 'react-icons/vsc'
import Swal from 'sweetalert2'
import axios from 'axios'


function SupervisedStudents() {

  const notificationMessage = Swal.mixin({
    showConfirmButton: false,
    timer: 6000,
    showCancelButton: false,
  })

  const [allSubmissions, setAllSubmissions] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/StudentSubmission/all')
    .then(response => {
      setAllSubmissions(response.data);
    })
    .catch(error => {
      console.error('Error Fetching Data:', error)
      notificationMessage.fire({
        icon: 'error',
        title: 'An Error occured whiles fetching the submitted Projects',
        timer: '6000',
        text: 'Please refresh the page again in a few moments'
      });
    })
  }, []);

  const getStatusColor = (status)=> {
    switch (status){
      case "Pending":
        return 'amber-400';
        case "Approved":
          return 'green-400';
          case "Rejected":
            return 'red-600';
    }
  }

/* const showDownloadModal = () => {
  Swal.fire({ 
    imageUrl: '/UGRepositoryLogo.png',
    imageWidth: '150px',
    title: 'Your File Will Begin Download Now',
  })
}

const showEditModal = () => {
Swal.fire({
  imageUrl:'/UGRepositoryLogo.png',
  imageWidth: '150px',
  title: 'Edit Status of Student',
})
} */

  return (
    <DefaultLayout>
        <div className='rounded-sm border border-LegonContainer bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1'>
          <div className='max-w-full overflow-x-auto'>
           <div className='py-6 px4 md:px-6 xl:px-7.5'>
              <h1 className='text-xl text-center font-semibold text-black'>Supervised Students</h1>
             </div>


             <table className='w-full table-auto'>
              <thead>
              <tr className='bg-LegonContainer text-left'>
                <th className='min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11'>Student Information</th>
                <th className='min-w-[150px] py-4 px-4 font-medium text-black'>Contact Number</th>
                {/* <th className='min-w-[120px] py-4 px-4 font-medium text-black'>Department</th> */}
                <th className='min-w-[100px] py-4 px-4 font-medium text-black'>Project Title</th>
                <th className='min-w-[80px] py-4 px-4 font-medium text-black'>Status</th>
                {/* <th className='py-4 px-4 font-medium text-black'>Actions</th> */}
                </tr>
              </thead>

                <tbody>
                  {allSubmissions.map((allSubmission)=> (
                  <tr key={allSubmission.student_Submission_ID}>

                    <td className='border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11'>
                    <h5 className='font-medium text-black'>{/* Student Name */} {allSubmission.first_Name} {allSubmission.last_Name} </h5>
                    <p className='text-sm'>{/* Student ID */} {allSubmission.student_ID} </p>
                    <p className='text-sm'>{/* Student Email */}  {allSubmission.student_Email} </p>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='text-black'>{/* 027-478-4563 */} {allSubmission.student_Contact} </p>
                    </td>

                    {/* <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='font-medium text-sm text-black'>Computer Science</p>
                    </td> */}

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}>{/* Lorem Ipsum Lorem Ipsum */} {allSubmission.project_Description} </p>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      
                      <p className={`inline-flex rounded-full bg-${getStatusColor(allSubmission.submission_Status)} bg-opacity-10 px-3 text-sm font-medium text-${getStatusColor(allSubmission.submission_Status)}`}>{/* Approved */} {allSubmission.submission_Status} </p>
                    </td>

                      {/* <td className='border-b border-[#eee] py-5 px-4'>
                        <div className='flex items-center space-x-3.5'>
                          <button className='text-LegonBlue hover:text-LegonGold'>
                            <VscDesktopDownload className='fill-current' title='Download Project' size={18} onClick={showDownloadModal} />
                          </button>

                          <button className='text-LegonBlue hover:text-LegonGold'>
                            <VscEdit className='fill-current' title='Edit Status' size={18} onClick={showEditModal} />
                          </button>
                        </div>
                      </td> */}

                  </tr>
                  ))}
                </tbody>
             </table>
            </div>
          </div>
    </DefaultLayout>
  )
}

export default SupervisedStudents
