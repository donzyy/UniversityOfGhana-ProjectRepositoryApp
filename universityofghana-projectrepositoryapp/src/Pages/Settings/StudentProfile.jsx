import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import { VscCallIncoming, VscMail, VscPerson, VscWorkspaceTrusted } from 'react-icons/vsc'

const StudentProfile = () => {
  return (
    <DefaultLayout>

        <div className='overflow-hidden rounded-sm border border-LegonContainer bg-white shadow-default'>
            <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-11.5'>

                <div className='border-b border-LegonGold py-4 px-6.5'>
                    <img className='mx-auto my-6 h-32 sm:h-32 w-auto' src='/UGRepositoryLogo.png' alt='University Of Ghana Logo' />
                    <h1 className='font-bold text-2xl text-black text-center'>Student Profile</h1>
                </div>

            </div>

            <div className='p-7'>
                <form action='#'>

                    <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>First Name</label>
                            <div className='relative'>
                                <span className='absolute left-4.5 top-4'>
                                    <VscPerson className='fill-current' size={20} />
                                </span>
                                <input className='w-full rounded border border-LegonBlue bg-LegonContainer py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='First Name' name='firstName' id='firstName' placeholder='First Name' />
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>Last Name</label>
                            <div className='relative'>
                                <span className='absolute left-4.5 top-4'>
                                    <VscPerson className='fill-current' size={20} />
                                </span>
                                <input className='w-full rounded border border-LegonBlue bg-LegonContainer py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Last Name' name='lastName' id='lastName' placeholder='Last Name' />
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>Student ID</label>
                            <div className='relative'>
                                <span className='absolute left-4.5 top-4'>
                                    <VscWorkspaceTrusted className='fill-current' size={20} />
                                </span>
                                <input className='w-full rounded border border-LegonBlue bg-LegonContainer py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Student ID' name='studentID' id='studentID' placeholder='Student ID' />
                            </div>
                        </div>

                    </div>

                    <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>Student Email</label>
                            <div className='relative'>
                                <span className='absolute left-4.5 top-4'>
                                    <VscMail className='fill-current' size={20} />
                                </span>
                                <input className='w-full rounded border border-LegonBlue bg-LegonContainer py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Student Email' name='studentEmail' id='studentEmail' placeholder='Student Email' />
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2'>
                            <label className='mb-3 block text-sm font-medium text-LegonText' htmlFor='fullName'>Student Contact</label>
                            <div className='relative'>
                                <span className='absolute left-4.5 top-4'>
                                    <VscCallIncoming className='fill-current' size={20} />
                                </span>
                                <input className='w-full rounded border border-LegonBlue bg-LegonContainer py-3 pl-11.5 pr-4.5 text-LegonText focus:border-LegonGold focus-visible:outline-none' type='text' title='Student Contact' name='studentContact' id='studentContact' placeholder='Student Contact'  />
                            </div>
                        </div>

                    </div>

                </form>
            </div>

        </div>

    </DefaultLayout>
  )
}

export default StudentProfile
