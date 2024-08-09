'use client'

import React from 'react';
import AnimatedComponent from './AnimatedComponent';

const Footer = () => {
  const email = 'ezekieljkang@gmail.com';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(email);
  };
  
  return (
    <div className='mx-auto w-[87.5vw] max-w-screen-[1680px]'>
      <AnimatedComponent>
        <div className='pt-[7rem] items-center'>
          <div className='text-[48px] md:text-[56px] leading-[1.05px] tracking-[-.015em] pb-[1.5rem]'>
            <h1>EK</h1>
          </div>
          <div className='flex flex-col py-[3rem] text-[21px] md:text-[28px] font-medium space-y-1 md:space-y-[-.5rem]'>
            <div className='relative group'>
              <a
                href='#'
                onClick={handleEmailClick}
                className='cursor-pointer'
              >
                Email.
                <span className='absolute right-[93.5%] transform -translate-x-1/2 -top-4 bg-black text-white text-[10px] rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block'>
                Click To Copy
              </span>
              </a>
            </div>
            <div>
              <a 
                href="https://www.linkedin.com/in/ezekiel-kang/"
                target='_blank'
                rel="noopener noreferrer"
                className='cursor-pointer'
              >Linkedin.</a>
            </div>
            <div>
              <a
                href="/Ezekiel-Kang-Resume.pdf"
                download="Ezekiel-Kang-Resume.pdf"
                className='cursor-pointer'
              >Resume.</a>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
}

export default Footer;
