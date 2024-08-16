import React from 'react';
import { Link } from 'react-router-dom'; 
import { IoIosArrowForward } from "react-icons/io";
import { FaTiktok, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Links2 = [
    { id: 10, name: "Register Live or Push", link: "/login" },
    { id: 11, name: "About Ableton", link: "/About" },
    { id: 12, name: "Jobs", link: "/Jobs" },
];
export const Links3 = [
    { id: 13, name: "Find Ableton User Groups", link: "/find" },
    { id: 14, name: "Find Certified Training", link: "/find" },
    { id: 15, name: "Become a Certified Trainer", link: "/find" },
];
export const Links4 = [
    { id: 16, name: "Offers for students and teachers", link: "/find" },
    { id: 17, name: "Ableton for the Classroom", link: "/find" },
    { id: 18, name: "Ableton for Colleges and Universities", link: "/find" },
];
export const Links5 = [
    { id: 1, name: "Contact Us", link: "/find" },
    { id: 2, name: "Press Resources", link: "/find" },
    { id: 3, name: "Legal information", link: "/find" },
    { id: 4, name: "Privacy Policy", link: "/find" },
    { id: 5, name: "Cookie Settings", link: "/find" },
    { id: 6, name: "Imprint", link: "/find" },
];

const Footer = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        {/* Divider */}
        <div className='border-t-2 border-gray-200 w-full mx-auto opacity-50 mt-14'></div>

        {/* Main Title */}
        <div className='font-Jost font-semibold text-4xl mt-24'>Ableton</div>

        {/* Footer Content */}
        <div className='flex flex-col md:flex-row justify-between mt-7'>
          {/* Section 1 */}
          <div>
            <ul>
              {Links2.map(({ id, name, link }) => (
                <li key={id} className='cursor-pointer py-1 font-Jost text-sm'>
                  <Link to={link} className='hover:text-bleuu flex items-center'>
                    {name} <IoIosArrowForward className='ml-1'/>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex gap-2 text-3xl mt-5 mr-16'>
              <a href=""><FaTiktok /></a>
              <a href=""><FaFacebookSquare/></a>
              <a href=""><FaInstagram/></a>
              <a href=""><FaYoutube/></a>
              <a href=""><FaXTwitter/></a>
            </div>
            <h3 className='font-Jost font-semibold mt-7'>Community</h3>
            <ul>
              {Links3.map(({ id, name, link }) => (
                <li key={id} className='cursor-pointer py-1 font-Jost text-sm'>
                  <Link to={link} className='hover:text-bleuu flex items-center'>
                    {name} <IoIosArrowForward className='ml-1 '/>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className='font-Jost font-semibold mt-10'>Education</h3>
            <ul>
              {Links4.map(({ id, name, link }) => (
                <li key={id} className='cursor-pointer py-1 font-Jost text-sm'>
                  <Link to={link} className='hover:text-bleuu flex items-center'>
                    {name} <IoIosArrowForward className='ml-1'/>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className='font-Jost font-semibold mt-10'>Language and Location</h3>
            <div className='flex mt-5'>
              <select className='block h-10 w-48 bg-gray-100 px-2 py-2'>
                <option>Language</option>
                <option>English</option>
                <option>French</option>
                <option>Arabic</option>
                <option>Russian</option>
                <option>Spanish</option>
                <option>Portuguese</option>
                <option>Italian</option>
                <option>German</option>
                <option>Japanese</option>
                <option>Chinese</option>
                <option>Korean</option>
              </select>
              <select className='block h-10 w-48 bg-gray-100 px-2 py-2 ml-2'>
                <option>Location</option>
                <option>Algeria</option>
                <option>UK</option>
                <option>USA</option>
                <option>India</option>
                <option>France</option>
                <option>Spain</option>
                <option>Germany</option>
                <option>Japan</option>
                <option>China</option>
                <option>Korea</option>
              </select>
            </div>
          </div>

          {/* Section 3 */}
          <div className='mt-10 md:mt-0'>
            <h3 className='font-Jost font-semibold'>Sign up to our newsletter</h3>
            <p className='font-Jost mt-1'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <form>
              <div className='flex mt-5'>
                <input type="email" name="email" id="email" placeholder="Email address" className='border-b-2 border-bleuu w-60'/>
                <button type="submit" className='bg-bleuu w-20 h-9 rounded ml-4 text-white font-Jost text-sm'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className='flex gap-6 mt-10 mb-24 font-Jost text-sm flex-nowrap'>
          {Links5.map(({ id, name, link }) => (
            <div key={id} className='cursor-pointer'>
              <Link to={link} className='hover:text-bleuu'>{name}</Link>
            </div>
          ))}
         
        </div>
      </div>
    </>
  );
}

export default Footer;
