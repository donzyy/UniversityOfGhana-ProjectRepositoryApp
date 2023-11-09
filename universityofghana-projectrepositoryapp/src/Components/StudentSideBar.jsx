import React, { useEffect, useRef, useState } from 'react'
import { VscChevronLeft, VscFileZip, VscNotebookTemplate } from 'react-icons/vsc'
import { NavLink, useLocation } from 'react-router-dom'


const StudentSideBar = ({sidebarOpen, setSidebarOpen}) => {
    const location = useLocation()
    const {pathname} = location

    const trigger = useRef(null)
    const sidebar = useRef(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const [sidebarExpanded/* , setSidebarExpanded */] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    )

    //clocse on click outside
    useEffect(()=> {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
            return setSidebarOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    //close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
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
            <NavLink to='/template'>
                <img src='/UGRepositorySidebarLogo-2.png' />
            </NavLink>
            <button ref={trigger} onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls='sidebar' aria-expanded={sidebarOpen} className='block lg:hidden' >
                <VscChevronLeft className='fill-current' size={30} />
            </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}


        <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
            {/* <!-- Sidebar Menu --> */}
            <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
                {/* <!-- Student Group --> */}
                <div>
                    <h3 className='mb-4 ml-4 text-sm font-semibold text-LegonBlue'>STUDENT MENU</h3>
                         
                         {/* <!-- Student Item List --> */}
                        <ul className='mb-6 flex flex-col gap-1.5'>
                            <li>
                                <NavLink to= '/template' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${pathname.includes('template') && 'bg-LegonGold'}`}>
                                    <VscNotebookTemplate className='flex fill-current' size={20} />
                                    Documentation and Guidlines
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to= '/projectupload' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${pathname.includes('projectupload') && 'bg-LegonGold'}`}>
                                    <VscFileZip className='flex fill-current' size={20} />
                                    Upload Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to= '/projectstatus' className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-LegonBlue duration-300 ease-in-out hover:bg-LegonGold ${pathname.includes('projectstatus') && 'bg-LegonGold'}`}>
                                    <VscNotebookTemplate className='flex fill-current' size={20} />
                                    Project Status
                                </NavLink>
                            </li>
                        </ul>
                        {/* <!-- Student Item List --> */}
                </div>

            </nav>
        </div>

    </aside>
  )
}

export default StudentSideBar
