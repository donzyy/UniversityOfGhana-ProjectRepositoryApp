import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { VscComment } from "react-icons/vsc";

const DropdownMessage =() => {

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


  return (
    <li className='relative' x-data='{ dropdownOpen: false, notifying: true }'>
      <Link ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)} className='relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] bg-gray-200 hover:text-LegonGold' to='#'>
        <span className='absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-red-600'>
          <span className='absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75'></span>
        </span>
      <VscComment className='fill-current duration-300 ease-in-out' size={18}/>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)} className={`absolute -right-16 mt-2.5 h-90 w-75 flex-col rounded-sm border bg-white shadow-default ${dropdownOpen === true ? 'block' : 'hidden'}`}>
      <div className='px-4.5 py-3'>
        <h5 className='text-sm font-medium text-gray-400'>Messages</h5>
        </div>

        <ul className='flex h-auto flex-col overflow-y-auto'>
          <li>
            <Link className='flex gap-4.5 border-t px-4.5 py-3 hover:bg-gray-300' to='#'>
              <div className='h-12.5 w-12.5 rounded-full'>
                {/* Add user images for all of the user info here */}
                <img src='/UGRepositoryLogo.png' alt='User1' />
              </div>

              <div>
                <h6 className='text-sm font-medium text-black'>
                  Another One Bites The Dust
                </h6>
                <p className='text-sm'>Lorem Ipsum</p>
                <p className='text-xs'>Lorem Ipsum</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className='flex gap-4.5 border-t px-4.5 py-3 hover:bg-gray-300' to='#'>
              <div className='h-12.5 w-12.5 rounded-full'>
                {/* Add user images for all of the user info here */}
                <img src='/UGRepositoryLogo.png' alt='User1' />
              </div>

              <div>
                <h6 className='text-sm font-medium text-black'>
                  Another One Bites The Dust
                </h6>
                <p className='text-sm'>Lorem Ipsum</p>
                <p className='text-xs'>Lorem Ipsum</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className='flex gap-4.5 border-t px-4.5 py-3 hover:bg-gray-300' to='#'>
              <div className='h-12.5 w-12.5 rounded-full'>
                {/* Add user images for all of the user info here */}
                <img src='/UGRepositoryLogo.png' alt='User1' />
              </div>

              <div>
                <h6 className='text-sm font-medium text-black'>
                  Another One Bites The Dust
                </h6>
                <p className='text-sm'>Lorem Ipsum</p>
                <p className='text-xs'>Lorem Ipsum</p>
              </div>
            </Link>
          </li>
          <li>
            <Link className='flex gap-4.5 border-t px-4.5 py-3 hover:bg-gray-300' to='#'>
              <div className='h-12.5 w-12.5 rounded-full'>
                {/* Add user images for all of the user info here */}
                <img src='/UGRepositoryLogo.png' alt='User1' />
              </div>

              <div>
                <h6 className='text-sm font-medium text-black'>
                  Another One Bites The Dust
                </h6>
                <p className='text-sm'>Lorem Ipsum</p>
                <p className='text-xs'>Lorem Ipsum</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}

    </li>
  )
}

export default DropdownMessage
