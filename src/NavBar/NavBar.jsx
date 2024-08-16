import React from 'react';
import Logo from '../Logo';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import ResponsiveM from './ResponsiveM';
import { Link } from 'react-router-dom';

export const Links = [
  { id: 10, name: "About", link: "/about" },
  { id: 11, name: "Jobs", link: "/jobs" },
  { id: 12, name: "Apprenticeships", link: "/Apprenticeships" },
  { id: 5, name: "Shop", link: "/Shop" },
  { id: 6, name: "Packs", link: "/Packs" },
  { id: 7, name: "Help", link: "/Help" },
  { id: 8, name: "More+", link: "/More+" },
];

export const Links1 = [
  { id: 13, name: "GoLive", link: "/Golive" },
  { id: 9, name: "Login", link: "/log&register" },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={`${showMenu ? "bg-bleuu transition-all duration-200" : "bg-white"} font-Jost container mx-auto px-4`}>
        <nav className=''>
          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <ul className=''>
              <div className='md:flex'>
                <div className='-mt-4'>
                  <Link to={'/'}>
                    <Logo />
                  </Link>
                </div>
                
                {/* NavLinks Section */}
                <div className='md:flex md:justify-between md:gap-4 md:font-medium'>
                  {Links.map(({ id, name, link }) => (
                    <li key={id} className='cursor-pointer py-4'>
                      <Link
                        to={link}
                        className={`justify-between gap-4 hover:text-bleuu ${
                          name === "More+" ? "text-orangee " : ""
                        }`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </div>

                {/* Right-aligned Links */}
                <div className='md:flex md:justify-between md:gap-4 md:ml-80 md:font-medium'>
                  {Links1.map(({ id, name, link }) => (
                    <li key={id} className='cursor-pointer py-4'>
                      <Link
                        to={link}
                        className={`justify-between gap-4 text-black ${
                          name === "GoLive" ? "text-bleuu" : ""
                        }`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <div className={`${showMenu ? "bg-bleuu" : "bg-white"} flex`}>
              <div className='-mt-4'>
                <Logo />
              </div>
              <div className='flex'>
                <h1
                  className={`${
                    showMenu ? "text-white bg-bleuu" : "text-black"
                  } mt-5 text-lg font-semibold`}
                >
                  Menu
                </h1>
                <div className='flex md:hidden'>
                  {showMenu ? (
                    <IoMdArrowDropup
                      onClick={toggleMenu}
                      className='cursor-pointer text-lg mt-7 text-white'
                    />
                  ) : (
                    <IoMdArrowDropdown
                      onClick={toggleMenu}
                      className='cursor-pointer text-lg mt-7'
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile nav links */}
          <div className='md:hidden'>
            <ResponsiveM showMenu={showMenu} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
