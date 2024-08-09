import React from 'react';
import { futureSkills, presentSkills } from '@/data';
import Image from 'next/image';

const MySkills = () => {
  const { iconList } = presentSkills[0];
  const { iconList2 } = futureSkills[0];
  const prefix = '/ezekielkang-portfolio';

  return (
    <div className='flex text-center items-center py-6 space-x-4'>
      <p className='text-[17px] text-customBG leading-[1.47] tracking-[.022em] pb-2 md:pb-0'>Skills: </p>
      <div className='flex items-center gap-x-2'>
        {iconList.map((icon, index) => (
          <div
            key={index}
            className='border border-black bg-white rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
          >
            <Image
              src={`${prefix}${icon}`}
              height="1000"
              width="1000"
              alt={`Icon ${index}`}
              className='p-2'
            >
            </Image>
          </div>
        ))}
      </div>
      <p className='text-[17px] text-customBG leading-[1.47] tracking-[.022em] py-2 md:;py-0'>Exploring: </p>
      <div className='flex items-center gap-x-2'>
        {iconList2.map((icon, index) => (
          <div
            key={index}
            className='border border-black bg-white rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'// Adjust spacing as needed
          >
            <Image
              src={`${prefix}${icon}`}
              height="1000"
              width="1000"
              alt={`Icon ${index}`}
              className='p-2'
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;