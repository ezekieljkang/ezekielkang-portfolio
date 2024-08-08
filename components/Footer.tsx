'use client'
import React from 'react';
import AnimatedComponent from './AnimatedComponent';

const Footer = () => {
  const email = 'ezekieljkang@gmail.com'

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(email).then(() => {
      // setTooltipVisible(true);
      // setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
    });
  };
  
  return (
    <div className='mx-auto w-[87.5vw] max-w-screen-[1680px]'>
      <AnimatedComponent>
        <div className='pt-[7rem] items-center'>
          <div className='text-[48px] leading-[1.05px] tracking-[-.015em] pb-[1.5rem]'>
            <h1>EK</h1>
          </div>
          <div className='flex flex-col py-[3rem] text-[28px] font-medium space-y-[-.5rem]'>
            <div>
              <a
                href='#'
                onClick={handleEmailClick}
                className='cursor-pointer'
              >
                Email.
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
                href="#"
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