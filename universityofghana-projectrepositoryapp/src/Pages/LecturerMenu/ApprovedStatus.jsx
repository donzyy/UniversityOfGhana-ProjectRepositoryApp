import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { VscFeedback, VscLibrary } from 'react-icons/vsc'
import Swal from 'sweetalert2';
import axios from 'axios';


function ApprovedStatus() {

  const notificationMessage = Swal.mixin({
    showConfirmButton: false,
    timer: 6000,
    showCancelButton: false,
  })

  const [approvedSubmissions, setApprovedSubmissions] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/StudentSubmission/approved')
    .then(response => {
      setApprovedSubmissions(response.data)
    })
    .catch(error => {
      console.error('Error Fetching Data', error);

      notificationMessage.fire({
        icon: 'error',
        imageUrl: '/UGRepositoryLogo.png',
        imageWidth: '150px',
        title: 'An Error occured whiles getting the approved projects.',
        timer: '6000',
        text: 'Please Refresh the page in a few moments.'
      })
    })

  },[]);
  

    const showArchiveAlert = () => {
        Swal.fire({
            title: 'Test Archive Modal',
            text: 'Test Information for Archive',
            icon: 'success',
            timer: 3000
        });
      }

      const showEvaluationAlert = () => {
        Swal.fire({ 
          title:'Test Evaluation Modal',
          text:"This is a test evaluation modal",
          icon: 'success',
          imageUrl: '/UGRepositoryLogo.png',
          imageWidth: '150px',
          showConfirmButton:'true',
          showDenyButton: true,
          denyButtonColor: '#d2ac67' ,
          confirmButtonColor: '#00386c',
          confirmButtonText: "Yes",
          backdrop: 'true',
          timer: 2000,
        });
      }

  return (
    <DefaultLayout>
        <div className='rounded-sm border border-LegonContainer bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1'>
          <div className='max-w-full overflow-x-auto'>
            <div className='py-6 px4 md:px-6 xl:px-7.5'>
              <h1 className='text-xl text-center font-semibold text-black'>Approved Projects</h1>
            </div>

            <table className='w-full table-auto'>
              <thead>
                <tr className='bg-LegonContainer text-left'>
                  <th className='min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11'>Project Title</th>
                  <th className='min-w-[150px] py-4 px-4 font-medium text-black'>Student ID</th>
                  <th className='min-w-[120px] py-4 px-4 font-medium text-black'>Project Discription</th>
                  {/* <th className='min-w-[100px] py-4 px-4 font-medium text-black'>Date of Approval</th> */}
                  {/* <th className='py-4 px-4 font-medium text-black'>Actions</th> */}
                </tr>
                </thead>

                <tbody>
                  {approvedSubmissions.map((approvedSubmission)=> (
                  <tr key={approvedSubmission.student_Submission_ID}>
                    <td className='border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11'>
                      <h5 className='font-medium text-black'>{/* University Of Ghana: Repositoy Project */} {approvedSubmission.project_Title} </h5>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='text-black'>{/* 1073901 */} {approvedSubmission.student_ID} </p>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}>{/* Lorem Ipsum Lorem Ipsun */}  {approvedSubmission.project_Description} </p>
                    </td>

                    {/* <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='text-black'>May 18, 2023</p>
                    </td> */}

                    {/* <td className='border-b border-[#eee] py-5 px-4'>
                      <div className='flex items-center space-x-3.5'>
                        <button className='text-LegonBlue hover:text-LegonGold' onClick={showArchiveAlert}>
                          <VscLibrary className='fill-current' title='Archive' size={18} />
                        </button>

                        <button className='text-LegonBlue hover:text-LegonGold' onClick={showEvaluationAlert}>
                          <VscFeedback className='fill-current' title='Evaluation and Comments' size={18} />
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

export default ApprovedStatus
