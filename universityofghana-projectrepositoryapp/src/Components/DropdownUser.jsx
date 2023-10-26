import React, {useState, useRef, useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { VscChevronDown, VscAccount, VscNotebook, VscSettingsGear, VscSignOut } from "react-icons/vsc";
import Swal from 'sweetalert2';

//You have to import a user image to help

const DropdownUser =() => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    
    const trigger = useRef(null)
    const dropdown = useRef(null)

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
          if (!dropdown.current) return
          if (
            !dropdownOpen ||
            dropdown.current.contains(target) ||
            trigger.current.contains(target)
          )
            return
          setDropdownOpen(false)
        }
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
      })

      // close if the esc key is pressed
      useEffect(() => {
        const keyHandler = ({ keyCode }) => {
          if (!dropdownOpen || keyCode !== 27) return
          setDropdownOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
      })
      
      const navigate = useNavigate();
      //Function to handle LogOut
      const handleLogOut = () => {
        //Remove the token from local storage
        localStorage.removeItem('token');
        //Redirect to the login page
        navigate('/')
        
        Swal.fire ({
          toast: true,
          icon: 'success',
          position: 'top-end',
          text: 'Logged out sucessfully',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
      }

  return (
    <div className='relative'>
      <Link ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)} className='flex items-center gap-4' to='#'>

        <span className='hidden text-right lg:block'>
            <span className='block text-sm font-medium text-black'>
                User Name {/* Create a component that handles getting the username from the database */}
            </span>
            <span className='block text-xs'>User Role {/* Create a component that get's the user role from the database */} </span>
        </span>

        <span className='h-12 w-12 rounded-full'>
            {/* This is where you place the link to the user image.
            So just place the image in your public folder and now you can refernce it
            Additionally, you need to develop a get function with axios to get the image from the database
            */}
            <img src='/UGRepositoryLogo.png' alt='User Image' />
        </span>

        
        <VscChevronDown className='hidden fill-current sm:block' size={20} />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)} className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border bg-white shadow-default ${dropdownOpen === true ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col gap-5 border-b px-6 py-7.5'>
            <li>
                <Link to='/profile' className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-LegonGold lg:text-base'>
              <VscAccount className='fill-current' size={22} />
                    My Profile
                </Link>
            </li>

            {/* <li>
                <Link to='/something' className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-LegonGold lg:text-base'>
              <VscNotebook className='fill-current' size={22} />
                    My Contacts
                </Link>
            </li>
            <li>
                <Link to='/settings' className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-LegonGold lg:text-base'>
              <VscSettingsGear className='fill-current' size={22} />
                    Account Settings
                </Link>
            </li> */}
        </ul>
        <button className='flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out  lg:text-base' onClick={handleLogOut}>
        {/* <Link to='/' > 
          </Link> */}
           <div className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-LegonGold lg:text-base'>
          <VscSignOut className='fill-current' size={22} />
            Log Out
          </div>
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  )
}

export default DropdownUser
