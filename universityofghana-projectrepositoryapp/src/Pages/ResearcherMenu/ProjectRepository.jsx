import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import ProjectSideFilter from '../../Components/ProjectSideFilter'
import ProjectListing from '../../Components/ProjectListing'

function ProjectRepository() {
  return (
    <DefaultLayout>
        <div className='overflow-hidden rounded-sm border border-LegonContainer bg-white shadow-default'>
          <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>

            <div className='border-b border-LegonGold py-4 px-6.5'>
              <img className='mx-auto my-6 h-32 sm:h-32 w-auto' src='/UGRepositoryLogo.png' alt='University Of Ghana Logo' />
              <h1 className='font-bold text-2xl text-black text-center'>Projects Repository</h1>
            </div>

            <div className='p-5 flex items-center justify-between border-b border-LegonGold'>
            <ProjectSideFilter />
            </div>

            <div className='px-4 mt-10 mb-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            <ProjectListing />
            </div>

          </div>

          

        </div>
    </DefaultLayout>
  )
}

export default ProjectRepository
