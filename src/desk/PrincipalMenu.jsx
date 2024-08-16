import React from 'react';
import pic1 from '../assets/website/abl.png';
import pic2 from '../assets/website/E4.jpg';
import pic3 from '../assets/website/E5.jpg';
import pic4 from '../assets/website/E6.jpg';
import pic5 from '../assets/website/E7.jpg';
import pic6 from '../assets/website/E8.jpg';
import { IoIosArrowForward } from "react-icons/io";
import ReactPlayer from 'react-player/youtube';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const PrincipalMenu = () => {
  return (
    <>
      <div className='container mx-auto px-4'>
        {/* Section 1 */}
        <div className='flex flex-col md:flex-row items-center'>
          <img src={pic1} className='w-full md:w-[1000px] h-auto' />
        </div>
        <div className='mx-4 md:mx-16'>
          <div className='font-Jost font-semibold text-lg md:text-2xl text-justify mt-8 md:mt-24'>
            We make <span className='text-bleuu'>Live</span>, <span className='text-bleuu'>Push</span>,
            <span className='text-bleuu'>Note</span> and <span className='text-bleuu'>Link</span>
            — unique software and hardware for music creation and performance. With these products, 
            our community of users creates amazing things.
          </div>
          <div className='font-Jost text-base text-justify mt-6'>
            Ableton was founded in 1999 and released the first version of Live in 2001.
            Our products are used by a community of dedicated musicians, sound designers, 
            and artists from across the world.
          </div>
        </div>

        {/* Section 2 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <img src={pic2} className='w-full h-auto object-cover rounded-lg' />
          <div className='bg-yelloww p-6 rounded-lg shadow-lg'>
            <div className='font-Jost font-semibold text-lg md:text-2xl text-justify'>
              Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
            </div>
            <div className='font-Jost text-base text-justify pt-3'>
              We feel the same way about making Ableton products. 
              The driving force behind Ableton is our passion for what we make,
              and the people we make it for.
            </div>
            <button className='bg-white hover:bg-orangee hover:text-white text-black font-bold py-2 px-4 rounded-full mt-10'>Learn more</button>
          </div>
        </div>

        {/* Section 3 */}
        <div className='mx-4 md:mx-16'>
          <div className='font-Jost font-semibold text-lg md:text-2xl text-justify mt-24'>
            We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
          </div>
          <div className='font-Jost text-base text-justify mt-5'>
            Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of 
            cultural and professional backgrounds. Some of us have PhDs, 
            some are self-taught, and most of us are somewhere in between. 
            What connects us is the shared belief that each of us has the skills and knowledge
            to contribute to something big: helping to shape the future of music culture.
          </div>
          <div className='mt-12 mx-auto w-full md:w-3/4'>
            <ReactPlayer url='https://www.youtube.com/watch?v=9SbnhgjeyXA&t=16s' width='100%' />
          </div>
        </div>

        {/* Section 4 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <div className='bg-greenn p-6 rounded-lg shadow-lg'>
            <div className='font-Jost font-semibold text-lg md:text-xl text-justify'>
              We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
            </div>
            <div className='font-Jost text-base text-justify pt-3'>
              Rather than having a one-size-fits-all process, we try to give our people what they
              need to work their magic and grow. We’ve learned that achieving the best results 
              comes from building teams that are richly diverse
            </div>
            <button className='bg-white hover:bg-orangee hover:text-white text-black font-bold py-2 px-4 rounded-full mt-10'>Learn more</button>
          </div>
          <img src={pic3} className='w-full h-auto object-cover rounded-lg' />
        </div>

        {/* Section 5 */}
        <div className='mx-4 md:mx-16'>
          <div className='text-center mt-16'>
            <h1 className='font-Jost font-semibold text-3xl'>Work with us</h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
            <img src={pic4} className='w-full h-auto object-cover rounded-lg' />
            <div>
              <h1 className='font-Jost font-semibold text-lg md:text-xl mt-1'>
                We’re <span className='text-bleuu'>passionate</span> about what we do, but we’re equally passionate about improving who we are.
              </h1>
              <p className='font-Jost text-base text-justify mt-1'>
                We work hard to foster an environment where people can grow both personally and professionally, and we strive 
                to create a wealth of opportunities to learn from and with each other.
              </p>
              <p className='font-Jost text-base text-justify mt-1'>
                Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, 
                and coached on applying these in their daily work .
              </p>
            </div>
          </div>
        </div>

        {/* Section 6 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          <img src={pic5} className='w-full h-auto object-cover rounded-lg' />
          <div className='bg-viollet p-6 rounded-lg shadow-lg'>
            <div className='font-Jost font-semibold text-lg md:text-xl text-justify'>
              We aim to make our workplace enjoyable and will support your smooth transition as we seek exceptional global talent.
            </div>
            <div className='font-Jost text-base text-justify pt-3'>
              If you're joining us in Berlin, we'll help with relocation and paperwork.
              We’ll even provide you with free German or English lessons. Plus, working in Germany 
              means you can expect comprehensive health insurance for you and your family,
            </div>
            <button className='bg-white hover:bg-orangee hover:text-white text-black font-bold py-2 px-4 rounded-full mt-10'>Learn more</button>
          </div>
        </div>

        {/* Section 7 */}
        <div className='mt-20 mx-auto w-full md:w-4/5'>
          <img src={pic6} className='w-full h-auto object-cover rounded-lg' />
          <div className='bg-purplee font-Jost font-semibold text-lg md:text-2xl text-justify p-6 mt-6 rounded-lg shadow-lg'>
            We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
            <div className='flex mt-5'>
              <button className='text-bleuu'> <Link to={'/jobs'}>See latest jobs</Link></button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default PrincipalMenu;
