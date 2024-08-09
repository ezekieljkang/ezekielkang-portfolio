import React from 'react';

const NavBar = () => {
  const myEmail = 'ezekieljkang@gmail.com';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    navigator.clipboard.writeText(myEmail);
  };
  
  return (
    <div className='mx-auto w-[87.5vw] max-w-screen-[1680px]'>
      <div className='pb-[1.5rem] flex justify-between gap-[28px] items-center'>
        <div className='text-[48px] leading-[1.08] tracking-[-.003em] md:text-[80px] md:leading-[1.05px] md:tracking-[-.015em]'>
          <h1>EK</h1>
        </div>
        <div className='flex flex-col text-[21px] md:text-[28px] font-medium md:space-y-[-.5rem]'>
          <div className='relative group'>
            <a
              href='#'
              onClick={handleEmailClick}
              className='cursor-pointer'
            >
              Email.
              <span className='absolute left-[30%] transform -translate-x-1/2 -top-4 bg-black text-white text-[10px] rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block'>
                Click To Copy
              </span>
            </a>
          </div>
          <a 
            href="https://www.linkedin.com/in/ezekiel-kang/"
            target='_blank'
            rel="noopener noreferrer"
            className='cursor-pointer'
          >Linkedin.</a>
          <a
            href="/Ezekiel-Kang-Resume.pdf"
            download="Ezekiel-Kang-Resume.pdf"
            className='cursor-pointer'
          >Resume.</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
