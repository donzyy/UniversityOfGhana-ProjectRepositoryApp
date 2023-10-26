import React from 'react'
import { VscChevronDown, VscFilterFilled } from 'react-icons/vsc'


const ProjectSideFilter = () => {
  return (
    <>
    <div className='sm:flex space-x-4'>
        <button className='text-LegonGold border py-2 px-4 shadow font-medium rounded gap-3.5 flex items-center'>Department
        <VscChevronDown className='' size={23} />
        </button>
        
        <button className='text-LegonGold border py-2 px-4 shadow font-medium rounded gap-3.5 flex items-center'>Course Code
        <VscChevronDown className='' size={23} />
        </button>

      </div>
        
        <button className='bg-red-700 text-white py-2 px-4 font-medium shadow rounded gap-3.5 sm:mr-1 flex items-center'>Clear All
        <VscFilterFilled className='items-center flex' size={20} />
        </button>
  </>
  )
}

export default ProjectSideFilter
