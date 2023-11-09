import React, { useEffect, useRef, useState } from 'react'
import { VscChevronDown, VscChevronLeft, VscCommentUnresolved, VscDashboard, VscLaw, VscMortarBoard } from 'react-icons/vsc'
import { NavLink, useLocation } from 'react-router-dom'
import SidebarLinkGroup from './SidebarLinkGroup'

const SupervisorSideBar = ({sidebarOpen, setSidebarOpen}) => {

  const location = useLocation()
  const { pathname } = location

  const trigger = useRef(null)
  const sidebar = useRef(null)

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  )

   // close on click outside
   useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

 // close if the esc key is pressed
 useEffect(() => {
  const keyHandler = ({ keyCode }) => {
    if (!sidebarOpen || keyCode !== 27) return
    setSidebarOpen(false)
  }
  document.addEventListener('keydown', keyHandler)
  return () => document.removeEventListener('keydown', keyHandler)
})

useEffect(() => {
  localStorage.setItem('sidebar-expanded', sidebarExpanded)
  if (sidebarExpanded) {
    document.querySelector('body').classList.add('sidebar-expanded')
  } else {
    document.querySelector('body').classList.remove('sidebar-expanded')
  }
}, [sidebarExpanded])

  return (
    <aside ref={sidebar} className={`absolute left-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
        <NavLink to='/dashboard'>
          <img src="/UGRepositorySidebarLogo-2.png" alt="UniversityOfGhanaLogo" />
        </NavLink>
        <button ref={trigger} onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls='sidebar' aria-expanded={sidebarOpen} className='block lg:hidden'>
          <VscChevronLeft className='fill-current' size={30} />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
          {/* <!-- Lecturer Group --> */}
          <div>
          <h3 className='mb-4 ml-4 text-sm font-semibold text-LegonBlue'>SUPERVISOR MENU</h3>

          <ul className='mb-6 flex flex-col gap-1.5'>
            {/* <!-- Lecturer Item List --> */}
            <li>
              <NavLink to='/dashboard' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${pathname.includes('dashboard') && 'bg-LegonGold'}`}>
                  <VscDashboard className='fill-current' size={20} />
                  Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/assignedstudents' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${pathname.includes('assignedstudents') && 'bg-LegonGold'}`}>
                  <VscMortarBoard className='flex fill-current' size={20} />
                  Supervised Students
              </NavLink>
            </li>
            <li>
              <NavLink to='/commentaryandrating' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${pathname.includes('commentaryandrating') && 'bg-LegonGold'}`}>
                  <VscCommentUnresolved className='flex fill-current' size={20} />
                  Evaluation and Comments
              </NavLink>
            </li>
            {/* <!-- Lecturer Item List --> */}

            {/* <!-- Lecturer Menu Dropdown List --> */}
            <SidebarLinkGroup activeCondition={pathname === '/lecturermenu' || pathname.includes('lecturermenu')}>
              {(handleClick, open) => {return(
                <React.Fragment>
                  <NavLink to='#' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${(pathname === '/lecturermenu' || pathname.includes('lecturermenu')) && 'bg-LegonGold'}`} onClick={(e) => {e.preventDefault() 
                    sidebarExpanded? handleClick(): setSidebarExpanded(true)}} >
                        <VscLaw className='fill-current' size={20} />
                        Project Approval
                        <VscChevronDown className= {`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && 'rotate-180'}`} size={20} />
                  </NavLink>
                  {/* <!-- Dropdown Menu Start --> */}
                  <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                    <ul className='mt-4 mb-5.5 flex flex-col gap-2.5 pl-6'>
                      <li>
                        <NavLink to='/lecturermenu/approvedprojects' className={({ isActive }) =>'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:text-LegonGold ' + (isActive && '!text-LegonGold')}>
                          Approved
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='/lecturermenu/unapprovedprojects' className={({ isActive }) =>'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:text-LegonGold ' + (isActive && '!text-LegonGold')}>
                          Unapproved
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Dropdown Menu Start --> */}
                </React.Fragment>
              )}
            }
            </SidebarLinkGroup>
            {/* <!-- Lecturer Menu Dropdown List --> */}
          </ul>

        </div>
          {/* <!-- Lecturer Group --> */}
        </nav>
      </div>

    </aside>
  )
}

export default SupervisorSideBar
