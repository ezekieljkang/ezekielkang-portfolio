"use client";

import React from 'react';
import NavBar from './NavBar';
import Image from 'next/image';
import { AuroraBackground } from './ui/aurora-background';
import HeroAnimatedContainer from './HeroAnimatedContainer'; // Import the HeroAnimatedContainer
import MySkills from './MySkills';

const Hero = () => {
  return (
    <div className='pt-[1.5rem]'>
      <NavBar />
      <div className='relative overflow-hidden mx-auto'>
        {/* HeroAnimatedContainer should be the one handling the animation */}
        <HeroAnimatedContainer>
          <AuroraBackground>
            <div className="relative flex flex-col gap-4 items-center justify-center mx-16">
              <div className='flex items-center'>
                <div className='basis-1/3 flex justify-center'>
                  <Image 
                    src='/profile.png'
                    alt='a selfie of me'
                    width={300}
                    height={300}
                    className='rounded-full'
                  />
                </div>
                <div className='basis-2/3 flex flex-col justify-center'>
                  <div className='text-customBG text-[56px] leading-[1.07] tracking-[-.005em]'>
                    <h2>Hi, I&apos;m Ezekiel Kang</h2>
                  </div>
                  <div className='text-customBG leading-[1.14] text-[28px] tracking-[.007em]'>
                    <p>
                      I&apos;m a full-stack developer from Southern California, skilled in React, Tailwind, Node.js, and more, and continually looking to expand my skillset. I&apos;m passionate about creating simple, modern, and accessible web applications.
                    </p>
                    <div>
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
