import React from 'react'
import Swal from 'sweetalert2'


const SweetAlertTest1 = () => {
    const showAlert = () => {
        Swal.fire({
            title: 'Test Modal',
            text: 'Test Information',
            icon: 'success',
            timer: 2000
        });
    };

  return (
    <div className='p-10 text-center'>
      <h1 className='text-3xl mb-5'>Sweet Alert Modal</h1>
      <button className='text-white bg-LegonBlue hover:bg-LegonGold focus:outline-none font-medium text-sm rounded-lg px-5 py- text-center2.5 mr-5' onClick={showAlert}>
        Test Modal
      </button>
      </div>
  )
}

export default SweetAlertTest1
