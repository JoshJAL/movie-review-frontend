import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderButton from '../button/HeaderButton';
import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  return (
    <div className='bg-gray-700'>
      <div className='flex items-center w-full h-20 max-w-6xl gap-10 p-5 mx-auto'>
        <NavLink to={'/'} onClick={() => setNavOpen(false)}>
          <div className='flex items-center text-2xl font-bold text-yellow-400'>
            <FontAwesomeIcon icon={faVideoSlash} style={{ height: 32, width: 32 }} />
            Gold
          </div>
        </NavLink>

        {/* Mobile Nav */}
        <div className='relative w-full md:hidden'>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setNavOpen(false)}
            className={`text-4xl ml-auto ${navOpen ? 'flex' : 'hidden'}`}
          />
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setNavOpen(true)}
            className={`text-4xl ml-auto ${!navOpen ? 'flex' : 'hidden'}`}
          />
          <div
            className={`gap-5 absolute bg-gray-700 h-screen z-10 right-[-20px] p-10 w-full top-14 ${
              navOpen ? 'flex flex-col' : 'hidden'
            }`}
          >
            <NavLink
              onClick={() => setNavOpen(false)}
              to='/'
              className={`text-2xl font-bold ${
                location.pathname === '/' ? 'text-white' : 'text-gray-400'
              } hover:scale-105 transition-all duration-200 ease-in-out`}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to='/watchList'
              className={`text-2xl font-bold ${
                location.pathname === '/watchList' ? 'text-white' : 'text-gray-400'
              } hover:scale-105 transition-all duration-200 ease-in-out`}
            >
              Watch List
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to='/'
              className={`text-2xl font-bold text-gray-400 hover:scale-105 transition-all duration-200 ease-in-out`}
            >
              Login
            </NavLink>
            <NavLink
              onClick={() => setNavOpen(false)}
              to='/'
              className={`text-2xl font-bold text-gray-400 hover:scale-105 transition-all duration-200 ease-in-out`}
            >
              Register
            </NavLink>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className='items-center hidden w-full md:flex'>
          <div className='flex gap-5'>
            <NavLink
              to='/'
              className={`text-2xl font-bold ${
                location.pathname === '/' ? 'text-white' : 'text-gray-400'
              } hover:scale-105 transition-all duration-200 ease-in-out`}
            >
              Home
            </NavLink>
            <NavLink
              to='/watchList'
              className={`text-2xl font-bold ${
                location.pathname === '/watchList' ? 'text-white' : 'text-gray-400'
              } hover:scale-105 transition-all duration-200 ease-in-out`}
            >
              Watch List
            </NavLink>
          </div>
          <div className='flex gap-5 ml-auto'>
            <HeaderButton text='Login' />
            <HeaderButton text='Register' />
          </div>
        </div>
      </div>
    </div>
  );
}
