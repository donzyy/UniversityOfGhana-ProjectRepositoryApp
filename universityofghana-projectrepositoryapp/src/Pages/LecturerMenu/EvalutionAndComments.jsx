import React, { useEffect, useState } from 'react'
import SupervisorLayout from '../../Layout/SupervisorLayout'
import axios from 'axios';

function EvalutionAndComments() {
  const [submissionData, setSubmissionData] = useState([])

  useEffect(()=> {
   axios.get('https://localhost:5001/api/StudentSubmission')
   .then(response => {
    setSubmissionData(response.data)
   })
   .catch(error => {
    console.error('Trouble getting the data', error);
   })
  }, []);

  return (
    <SupervisorLayout>
        <div className='rounded-sm border border-LegonContainer bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1'>
          <div className='max-w-full overflow-x-auto'>

          <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>
              <h1 className='font-bold text-2xl text-black text-center'>Project Commentary and Rating</h1>
            </div>

            <table className='w-full table-auto'>
              <thead>
                <tr className='bg-LegonContainer text-left'>
                  <th className='min-w-[220px] py-4 px-4 font-medium text-black xl:pl-11'>Student ID</th>
                  <th className='min-w-[150px] py-4 px-4 font-medium text-black'>Project Title</th>
                  <th className='min-w-[150px] py-4 px-4 font-medium text-black'>Project Description</th>
                  <th className='min-w-[150px] py-4 px-4 font-medium text-black'>Supervisor Commentary</th>
                  <th className='py-4 px-4 font-medium text-black'>Supervisor Rating</th>
                </tr>
              </thead>
              
              <tbody>
                {submissionData.map((submission) => (
                <tr key={submission.student_Submission_ID}>
                  <td className='border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}>{submission.student_ID}</p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}> {submission.project_Title} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}> {submission.project_Description} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}> {submission.supervisor_Commentary} </p>
                  </td>

                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}> {submission.supervisor_Rating} out of 5 </p>
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

export default EvalutionAndComments
