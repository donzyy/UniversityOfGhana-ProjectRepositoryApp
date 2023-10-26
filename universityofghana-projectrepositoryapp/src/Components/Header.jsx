import React from 'react'
import { Link } from 'react-router-dom'
import { VscSearch } from "react-icons/vsc";
import DropdownNotification from './DropdownNotification';
import DropdownMessage from './DropdownMessage';
import DropdownUser from './DropdownUser';
import DropdownDefault from './DropdownDefault';

const Header = (props) => {
  return (
     <header className='sticky top-0 z-999  flex w-full bg-white drop-shadow-1'>
        <div className='flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11'>
          <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
            {/* <!-- Hamburger Toggle BTN --> */}
            <button 
            aria-controls='sidebar'
            aria-expanded={ props.sidebarOpen } 

            onClick={(e)=> {e.stopPropagation() 
              props.setSidebarOpen(!props.sidebarOpen)}} 
              
            
            className='z-9999 block rounded-sm border bg-white p-1.5 shadow-sm lg:hidden'>

              <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                <span className='du-block absolute right-0 h-full w-full'>
                  <span className= {`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${!props.sidebarOpen && '!w-full delay-300'}`} ></span>
                  <span className= {`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${!props.sidebarOpen && '!w-full delay-400'}`} ></span>
                  <span className= {`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${!props.sidebarOpen && '!w-full delay-500'}`} ></span>
                </span>

                <span className='absolute right-0 h-full w-full rotate-45'>
                  <span className= {`absolute left-2 top-0 block h-full w-1 bg-black delay-300 duration-200 ease-in-out ${!props.sidebarOpen && '!h-0 !delay-0'}`}></span>
                  <span className= {`delay-300 absolute left-0 top-2 block h-1 w-full rounded-sm bg-black duration-200 ease-in-out ${!props.sidebarOpen && '!h-0 !delay-200'}`}></span>
                </span>
              </span>
            </button>
            {/* <!-- Hamburger Toggle BTN --> */}

            <Link className='block flex-shrink-0  lg:hidden lg:h-auto w-56 ' to='/'>
                <img src='/UGRepositorySidebarLogo-2.png'  alt='University Of Ghana Logo'/>
              </Link>
          </div>

          <div className='hidden sm:block'>
            <form action='#' method='POST'>
              <div className='relative'>
                <button className='absolute top-1/2 left-46 -translate-y-1/2'>
                  {/* This is a place for an icon. Need to install react-icons in order to use */}
                  <VscSearch className='fill-LegonBlue hover:fill-LegonGold' size={20}/>
                </button>

                <input type='text' placeholder='Type to search...' className='w-full bg-transparent pr-4 focus:outline-none' />
              </div>
            </form>
          </div>

          <div className='flex items-center gap-3 2xsm:gap-7'>
            <ul className='flex items-center gap-2 2xsm:gap-4'>
              {/* <!-- Notification Menu Area --> */}
              {/* <DropdownNotification /> */}
              {/* <!-- Notification Menu Area --> */}

              {/* <!-- Chat Notification Area --> */}
              <DropdownMessage />
              {/* <!-- Chat Notification Area --> */}
            </ul>
            {/* <!-- User Area --> */}
            <DropdownUser />

            {/*
             <DropdownDefault /> 
             There's no noticable need for this code. But i'll keep it🤷‍♂️
            */}
            {/* <!-- User Area --> */}
          </div>
        </div>
     </header>
  )
}

export default Header
