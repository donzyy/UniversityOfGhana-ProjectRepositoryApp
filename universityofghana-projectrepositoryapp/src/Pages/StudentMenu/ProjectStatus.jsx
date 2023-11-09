import React, {useState, useEffect} from 'react'
import { VscLink } from "react-icons/vsc"

import DefaultLayout from '../../Layout/DefaultLayout'
import axios from 'axios';
import StudentLayout from '../../Layout/StudentLayout';


function ProjectStatus() {

  const [submissionData, setSubmissionData] = useState(null);

  useEffect(()=> {
    const fetchSubmissionData = async () => {
      try {
        const response = await axios.get('https://localhost:5001/api/LastSubmission');
        setSubmissionData(response.data)
      } 
      catch (error) {
        console.error('Error Fetching Your Project Details:', error)
      }
    }
    fetchSubmissionData();
  }, []);

  

  if (!submissionData) {
    return <div class="fixed left-0 top-0 z-999999 h-screen flex items-center justify-center w-screen">
     <div class="w-16 h-16 rounded-full animate-spin border-4 border-solid border-LegonGold border-t-transparent"></div>
     </div>
    
  }

  const getStatusColor = (status)=> {
    switch (status){
      case "Pending":
        return 'text-amber-400';
        case "Approved":
          return 'text-green-400';
          case "Rejected":
            return 'text-red-600';
    }
  }

  return (
    <StudentLayout>
      <div className='overflow-hidden rounded-sm border border-LegonContainer bg-white shadow-default'>
        <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>

          <div className='border-b border-LegonGold py-4 px-6.5'>
          <img className="mx-auto my-6 h-32 sm:h-32 w-auto" src="/UGRepositoryLogo.png" alt="University Of Ghana Logo" />
            <h1 className='font-bold text-2xl text-black text-center'>Submission Information</h1>
          </div>

        </div>

        <div className='-mt-6'>

          <dl className='divide-y divide-gray-400'>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Full Name:</dt>
              <dd className='mt-1 text-sm leading-6 text-LegonText sm:col-span-2 sm:mt-0 sm:pl-60 pl-25'> {submissionData.first_Name} {submissionData.last_Name} </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Submission Date:</dt>
              <dd className='mt-1 text-sm leading-6 text-LegonText sm:col-span-2 sm:mt-0 sm:pl-60 pl-25'>{/* 20th-Sep-2023 */} {submissionData.submission_Date} </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Status:</dt>
              <dd className={`mt-1 text-sm leading-6 font-bold sm:col-span-2 sm:mt-0 sm:pl-60 pl-25 ${getStatusColor(submissionData.submission_Status)}`}>{/* Approved */}  {submissionData.submission_Status} </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Project Description:</dt>
              <dd className='mt-1 text-sm leading-6 text-LegonText sm:col-span-2 sm:mt-0 sm:pl-30 sm:pr-10 pl-25'>
              {/* Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu. */}

              {submissionData.project_Description}
              </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Supervisor Commentary:</dt>
              <dd className='mt-1 text-sm leading-6 font-bold text-LegonText sm:col-span-2 sm:mt-0 sm:pl-30 sm:pr-10 pl-25'> {submissionData.supervisor_Commentary} </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Supervisor Project Rating:</dt>
              <dd className='mt-1 text-sm leading-6 font-bold text-LegonText sm:col-span-2 sm:mt-0 sm:pl-60 pl-25'> {submissionData.supervisor_Rating} out of 5 </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 pl-10 text-LegonText'>Attachment:</dt>
              <dd className='mt-1 text-sm leading-6 text-LegonText sm:col-span-2 sm:mt-0 pl-30 sm:pl-33 pr-10'>

                <ul role='List' className='divide-y divide-gray-400 rounded-md border border-LegonGold'>
                 
                  <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                    <div className='flex w-0 flex-1 items-center'>
                      <VscLink className='h-5 w-5 flex-shrink-0 text-LegonText' aria-hidden= "true" />
                      <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                        <span className='truncate font-medium'>{/* something_something. */} {submissionData.project_File_Name.split("\\").pop()} </span>
                        {/* <span className='flex-shrink-0 text-LegonText'>4mb</span> */}
                      </div>
                    </div>
                   {/*  <div className='ml-4 flex-shrink-0'>
                      <a href='#' className='font-medium text-LegonBlue hover:text-LegonGold py-4 pl-4 pr-5 text-sm leading-6'>Download</a>
                    </div> */}
                  </li>

                  {/* <li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
                  <div className='flex w-0 flex-1 items-center'>
                    <VscLink className='h-5 w-5 flex-shrink-0 text-LegonText' aria-hidden= "true" />
                    <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                      <span className='truncate font-medium'> </span>
                      <span className='flex-shrink-0 text-LegonText'>4mb</span>
                    </div>
                 </div>
                  <div className='ml-4 flex-shrink-0'>
                    <a href='#' className='font-medium text-LegonBlue hover:text-LegonGold py-4 pl-4 pr-5 text-sm leading-6'>Download</a>
                  </div>
                </li> */}

                  
                </ul>

              </dd>
            </div>

          </dl>

        </div>

      </div>
    </StudentLayout>
  )
}

export default ProjectStatus
