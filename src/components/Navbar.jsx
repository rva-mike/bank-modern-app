import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

// logic for ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}; dynamic block, if index is last element of navLinks then no margin, if else, margin right 10

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`z-[99] font-poppins font-normal cursor-pointer
          
          text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* if toggle is turned on show closed icons, otherwise show menu icon  */}
        <img
          className='w-[28px] h-[28px] object-contain'
          // callback function; in react never update the state by using the previous version of that same old state. If you want to change the state using the previous version of that same state, then create call back function using for ex. prev and !prev. This way react makes sure it keeps the state up to date
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu} alt="menu" />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} >


          <ul className="list-none flex flex-col  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer
          
          text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>


        </div>

      </div>

    </nav>
  )
}

export default Navbar

