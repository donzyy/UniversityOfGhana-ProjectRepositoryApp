import React, { useState } from 'react'
import TestModal2 from './TestModal2'


const TestModal = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div className='p-10 text-center'>
      <h1 className='text-3xl mb-5'>Test Modal For the Project</h1>
      <button className='text-white bg-LegonBlue hover:bg-LegonGold focus:outline-none font-medium text-sm rounded-lg px-5 py- text-center2.5 mr-5' onClick={() => setShowModal(true)}>
        Test Modal
      </button>
      <TestModal2 isVisible={showModal}  onClose= {() => setShowModal(false)} />
    </div>
  )
}

export default TestModal
