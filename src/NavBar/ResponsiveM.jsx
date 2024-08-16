import React from 'react';
import { Links, Links1 } from './NavBar';
import { Link } from 'react-router-dom';

const ResponsiveM = ({ showMenu, toggleMenu }) => {
  return (
    <>
      <div
        className={`${showMenu ? 'left-0' : 'left-[-100%]'} 
          fixed bottom-0 top-[10%] w-full transition-all duration-200 
          shadow-lg pt-16 px-8 bg-bleuu dark:bg-white-100 z-50 flex flex-col justify-between pb-4 md:hidden`}>
        <div className='card'>
          {/* Menu section */}
          <nav className='mt-12'>
            <ul className='space-y-4 font-medium'>
              <div className='-mt-32 -ml-10 flex'></div>
              {Links.map(({ id, name, link }) => {
                return (
                  <li key={id} className='cursor-pointer'>
                    <Link
                      to={link}
                      className='text-white py-2 transition-all duration-100 inline-block -mt-2'>
                      {name}
                    </Link>
                  </li>
                );
              })}
              {Links1.map(({ id, name, link }) => {
                return (
                  <li key={id} className='cursor-pointer'>
                    <Link
                      to={link}
                      className={`${
                        name === 'Log in or register' ? 'text-xs' : ''
                      } text-lg text-white py-2 transition-all duration-100 inline-block -mt-2`}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResponsiveM;
