import React from 'react'

const ArchiveModal = ({isArchiveVisible, onArchiveClose}) => {
    
    
    if (!isArchiveVisible) return null;

    const handleArchiveClose = (e) => {
        if (e.target.id === 'ArchiveWrapper') onArchiveClose();
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='ArchiveWrapper' onClick={handleArchiveClose}>
      <div className='w-[600px] flex flex-col'>
        <button className='text-white  text-xl place-self-end' onClick={onArchiveClose}>X</button>
        <div className='bg-white p-2 rounded text-center'>
            Archive Modal
        </div>
      </div>
    </div>
  )
}

export default ArchiveModal
