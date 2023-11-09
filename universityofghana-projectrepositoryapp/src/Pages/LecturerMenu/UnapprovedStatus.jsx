import React, { useEffect, useState } from 'react'
import {  VscCheckAll, VscCircleSlash, VscTrash } from 'react-icons/vsc'
import Swal from 'sweetalert2'
import axios from 'axios';
import SupervisorLayout from '../../Layout/SupervisorLayout';
import ReviewModal from '../../Components/Modals/ReviewModal';




function UnapprovedStatus() {

  const notificationMessage = Swal.mixin({
    showConfirmButton: false,
    timer: 6000,
    showCancelButton: false,
  })

  const [submissions, setSubmissions] = useState([]);

  

  
  const approved = 'Approved'

  const handleApproval = (submissionID) => {
    
    
    
    console.log(submissionID)
    axios.put(`https://localhost:5001/api/StudentSubmission/${submissionID}?submission_status=${approved}`, /* { submission_status: "Approved" } */)
    .then(response => {
      console.log('Submission Approved:', response.data);

      notificationMessage.fire({
        icon: 'success',
        imageUrl: '/UGRepositoryLogo.png',
        imageWidth: '150px',
        text: 'You have succesfully Approved the project'
      })
    })
    .catch(error => {
      console.error('Error Updating Submission Status:', error.message);

      notificationMessage.fire({
        icon: 'error',
        title: 'An Error occured whiles approving the project',
        timer: '6000',
        text: 'Please try again in a few moments'
      })
    })
  }

  const rejected = 'Rejected' 
  const handleRejection = (submissionID) => {
    
    console.log(submissionID)
    axios.put(`https://localhost:5001/api/StudentSubmission/${submissionID}?submission_status=${rejected}`, /* {student_Submission_ID: submissionID, submission_status: "Rejected" } */)
    .then(response => {
      console.log('Submission Rejected:', response.data);

      notificationMessage.fire({
        icon: 'success',
        imageUrl: '/UGRepositoryLogo.png',
        imageWidth: '150px',
        text: 'You have succesfully Rejected the project'
      })
    })
    .catch(error => {
      console.error('Error Updating Submission Status:', error.message);

      notificationMessage.fire({
        icon: 'error',
        title: 'An Error occured whiles rejecting the project',
        timer: '6000',
        text: 'Please try again in a few moments'
      })
    })
  }

  const handleDelete = (submissionID) => {
    axios.delete(`https://localhost:5001/api/StudentSubmission/${submissionID}`)
    .then(resonse => {
      console.log('Project Deleted' , resonse.data)

      notificationMessage.fire({
        icon: 'success',
        imageUrl: '/UGRepositoryLogo.png',
        imageWidth: '150px',
        text: 'You have succesfully Deleted the project'
      })

    })
    .catch (error => {
      console.error('An error occured Deleting the project', error)

      notificationMessage.fire({
        icon: 'error',
        title: 'An Error occured whiles Deleting the project',
        timer: '6000',
        text: 'Please try again in a few moments'
      })
    })

  }


  

  useEffect(() => {
    axios.get('https://localhost:5001/api/StudentSubmission/rejectedandpending')
    .then(response => {
      setSubmissions(response.data);
    })
    .catch(error => {
      console.error('Error Fetching Data:', error);
    })
  }, [handleApproval, handleRejection, handleDelete]);
  

  return (
    <SupervisorLayout>
        <div className='rounded-sm border border-LegonContainer bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1'>
          <div className='max-w-full overflow-x-auto'>
            <div className='py-6 px4 md:px-6 xl:px-7.5'>
              <h1 className='text-xl text-center font-semibold text-black'>Unapproved Projects</h1>
            </div>

            <table className='w-full table-auto'>
              <thead>
                <tr className='bg-LegonContainer text-left'>
                  <th className='min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11'>Project Title</th>
                  <th className='min-w-[150px] py-4 px-4 font-medium text-black'>Student ID</th>
                  <th className='min-w-[120px] py-4 px-4 font-medium text-black'>Project Description</th>
                  <th className='min-w-[100px] py-4 px-4 font-medium text-black'>Date Submitted</th>
                  <th className='min-w-[80px] py-4 px-4 font-medium text-black'>Project Status</th>
                  <th className='py-4 px-4 font-medium text-black'>Actions</th>
                </tr>
              </thead>

              <tbody>
                {submissions.map((submission) => (
                <tr key={submission.student_Submission_ID}>

                  <td  className='border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}>{/* Hospital Management System */} {submission.project_Title} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className=' text-black'>{/* 10929384 */}  {submission.student_ID} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}>{/* Lorem Ipsum Lorem Ipsum */} {submission.project_Description} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{/* January 17, 2023 */} {submission.submission_Date} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>

                  {/* {submission.submission_Status === 'Pending' && (
                    <p className='inline-flex rounded-full bg-amber-400 bg-opacity-10 px-3 text-sm font-medium text-amber-400'>Pending</p>
                  )}

                  {submission.submission_Status === 'Pending' && (
                    <p className='inline-flex rounded-full bg-red-600 bg-opacity-10 px-3 text-sm font-medium text-red-600'>Rejected</p>
                  )} */}

                  <p className={`inline-flex rounded-full bg-${submission.submission_Status === 'Pending' ? 'amber-400' : 'red-600'} bg-opacity-10 px-3 text-sm font-medium text-${submission.submission_Status === 'Pending' ? 'amber-400' : 'red-600'}`}>{submission.submission_Status}</p>
                  </td> 

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <div className='flex items-center space-x-3.5'>

                    {submission.submission_Status === 'Pending'  && (
                      <button className='text-LegonBlue hover:text-green-400'>
                        <VscCheckAll className='fill-current' title='Approve Project' size={18}  onClick={()=>  handleApproval(submission.student_Submission_ID)}/>
                      </button>
                    )}

                    {submission.submission_Status === 'Pending'  && (
                      <button className='text-LegonBlue hover:text-red-600' onClick={() =>  handleRejection(submission.student_Submission_ID)}>
                        <VscCircleSlash className='fill-current' title='Reject Project' size={18} />
                      </button>
                    )}

                    {submission.submission_Status === 'Rejected'  && (
                      <button className='text-LegonBlue hover:text-red-600'>
                        <VscTrash className='fill-current' title='Delete Project' size={18}  onClick={()=>  handleDelete(submission.student_Submission_ID)}/>
                      </button>
                    )}

                    {submission.submission_Status === null  && (
                      <button className='text-LegonBlue hover:text-red-600'>
                        <VscTrash className='fill-current' title='Delete Project' size={18}  onClick={()=>  handleDelete(submission.student_Submission_ID)}/>
                      </button>
                    )}
                    
                    <ReviewModal submissionID={submission.student_Submission_ID} />
                    </div>
                    
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            
          </div>
        </div>
        
    </SupervisorLayout>
     
      
    
  )
}

export default UnapprovedStatus
