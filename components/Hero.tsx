"use client";

import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import { AuroraBackground } from './ui/aurora-background';
import HeroAnimatedContainer from './HeroAnimatedContainer'; // Import the HeroAnimatedContainer
import MySkills from './MySkills';

const Hero = () => {
  const prefix = '/ezekielkang-portfolio';

  return (
    <div className='pt-[1.5rem]'>
      <NavBar />
      <div className='relative overflow-hidden mx-auto'>
        {/* HeroAnimatedContainer should be the one handling the animation */}
        <HeroAnimatedContainer>
          <AuroraBackground>
            <div className="relative flex gap-4 items-center justify-center mx-16">
              <div className='md:flex items-center'>
                <div className='basis-1/3 flex justify-center'>
                  <Image 
                    src={`${prefix}/profile.png`}
                    alt='a selfie of me'
                    width={300}
                    height={300}
                    className='rounded-full md:object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px]'
                  />
                </div>
                <div className='basis-2/3 flex flex-col justify-center'>
                  <div className='text-customBG text-[28px] leading-[1.14] tracking-[.007em] md:text-[56px] md:leading-[1.07] md:tracking-[-.005em] text-center md:text-left pt-[1.5rem] md:pt-0'>
                    <h2>Hi, I&apos;m Ezekiel Kang</h2>
                  </div>
                  <div className='text-customBG text-center md:text-left text-[21px] leading-[1.19] tracking-[.011em] md:leading-[1.14] md:text-[28px] md:tracking-[.007em]'>
                    <p className='pt-2 md:pt-0'>
                      I&apos;m a full-stack developer from Southern California, skilled in React, Tailwind, Node.js, and more, and continually looking to expand my skillset. I&apos;m passionate about creating simple, modern, and accessible web applications.
                    </p>
                    <div className='hidden md:block'>
                      <MySkills />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AuroraBackground>
        </HeroAnimatedContainer>
      </div>
    </div>
  );
}

export default Hero;
