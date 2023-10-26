import React, {useState, useEffect, useRef} from 'react'
import { VscEllipsis, VscDiffIgnored, VscTrash } from "react-icons/vsc";

const DropdownDefault= () => {
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
    <div className='relative'>
      <button ref={trigger} onClick={() => setDropdownOpen(!dropdownOpen)}>
        <VscEllipsis  size={20}/>
      </button>
      <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)} className={`absolute right-0 top-full z-40 w-40 space-y-1 rounded-sm border bg-white p-1.5 shadow-default ${dropdownOpen === true ? 'block' : 'hidden'}`}>
        <button className='flex w-full items-center gap-2 rounded-sm py-1.5 px-4 text-left text-sm hover:bg-gray-200'>
          <VscDiffIgnored size={20}/>
          Edit
        </button>
        <button className='flex w-full items-center gap-2 rounded-sm py-1.5 px-4 text-left text-sm hover:bg-gray-200'>
          <VscTrash size={20}/>
          Delete
        </button>
      </div>
    </div>
  )
}

export default DropdownDefault
