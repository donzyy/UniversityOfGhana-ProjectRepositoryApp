import React, { useState } from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { VscFeedback, VscLibrary } from 'react-icons/vsc'
import ArchiveModal from './ArchiveModal';
import EvaluationandCommentModal from './EvaluationandCommentModal';
import SweetAlertTest1 from './SweetAlertTest1';
import Swal from 'sweetalert2';


function ApprovedStatus() {
  const [isArchiveVisible, setShowArchiveModal] = useState(false);
  const [isEvaluationVisible, setshowEvaluationModal] = useState(false);
  const [isSweetAlertVisible, setSweetAlertVisible] = useState(false);

  const toggleArchiveModal =() => {
    setShowArchiveModal(!isArchiveVisible);
  }
  
  const toggleEvaluationModal = () => {
    setshowEvaluationModal(!isEvaluationVisible);
  }

  const toggleSweetAlert = () => {
    setSweetAlertVisible(!isSweetAlertVisible);
  }


  
    const showAlert = () => {
        Swal.fire({
            title: 'Test Modal',
            text: 'Test Information',
            icon: 'success',
            timer: 2000
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
                  <th className='min-w-[100px] py-4 px-4 font-medium text-black'>Date of Approval</th>
                  <th className='py-4 px-4 font-medium text-black'>Actions</th>
                </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className='border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11'>
                      <h5 className='font-medium text-black'>University Of Ghana: Repositoy Project</h5>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='text-black'>1073901</p>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='font-medium text-sm text-black' style={{ overflowWrap: 'break-word' }}>Lorem Ipsum Lorem Ipsun</p>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <p className='text-black'>May 18, 2023</p>
                    </td>

                    <td className='border-b border-[#eee] py-5 px-4'>
                      <div className='flex items-center space-x-3.5'>
                        <button className='text-LegonBlue hover:text-LegonGold' onClick={showAlert}>
                          <VscLibrary className='fill-current' size={18} />
                        </button>

                        <button className='text-LegonBlue hover:text-LegonGold' onClick={toggleEvaluationModal}>
                          <VscFeedback className='fill-current' size={18} />
                        </button>
                        
                      </div>
                    </td>

                  </tr>
                </tbody>
            </table>
          </div>
        </div>
        
        <ArchiveModal isArchiveVisible={isArchiveVisible} onArchiveClose={() => setShowArchiveModal(false)} />
        <EvaluationandCommentModal isEvaluationVisible={isEvaluationVisible} onEvaluationClose={() => setshowEvaluationModal(false)} />
        
    </DefaultLayout>
  )
}

export default ApprovedStatus
