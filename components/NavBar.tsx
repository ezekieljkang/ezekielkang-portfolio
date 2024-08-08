'use client'

import React from 'react';

const NavBar = () => {
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
      <div className='pb-[1.5rem] flex justify-between gap-[28px] items-center'>
        <div className='text-[80px] leading-[1.05px] tracking-[-.015em]'>
          <h1>EK</h1>
        </div>
        <div className='flex flex-col text-[28px] font-medium space-y-[-.5rem]'>
        <a
          href='#'
          onClick={handleEmailClick}
          className='cursor-pointer'
        >
          Email.
        </a>
          <a 
            href="https://www.linkedin.com/in/ezekiel-kang/"
            target='_blank'
            rel="noopener noreferrer"
            className='cursor-pointer'
          >Linkedin.</a>
          <a
            href="#"
            className='cursor-pointer'
          >Resume.</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;