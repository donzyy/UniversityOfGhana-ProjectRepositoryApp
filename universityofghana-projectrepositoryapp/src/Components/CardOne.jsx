import React from 'react'
import { VscJersey } from 'react-icons/vsc'

const CardOne = () => {
  return (
    <div className='rounded-sm border border-LegonContainer bg-white py-6 px-7.5 shadow-default '>

        <div className='flex h-11 w-11.5 items-center justify-center rounded-full bg-LegonGold'>
            <VscJersey className='fill-white' size={22} />
        </div>

      <div className='mt-4 flex items-end justify-between'>
        <div>
            <h4 className='text-title-md font-bold text-LegonBlue'>20</h4>
            <span className='text-sm font-medium'>Total Supervised Students</span>
        </div>
      </div>
    </div>
  )
}

export default CardOne
