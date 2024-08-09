'use client'

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedComponent from "./AnimatedComponent";
import { AboutMeCardStack } from "./AboutMeCardStack";

const prefix = '/ezekielkang-portfolio';

export function AboutMe() {
  const features = [
    {
      title: "Traveling.",
      description:
        "Traveling is one of my big passsions. I love exploring new views and experiencing different cultures. Check out some of my favorite travel moments and the places I've visited, marked on the globe!",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-gray-300",
    },
    {
      title: "The Pups.",
      description:
        "Toby is the Red Tri Australian Shepherd, Latte is the golden Cocker Spaniel/Poodle mix, and Bailey is the black Maltese/Yorkshire Terrier.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-gray-300",
    },
    {
      title: "Free time.",
      description:
        "When I’m not coding or working on projects, you’ll find me playing video games with friends on Discord or listening to music on Spotify. Gaming helps me unwind and connect with others, while music is my go-to for setting the mood.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-r dark:border-gray-300",
    },
    {
      title: "Of course, coding.",
      description:
        "I, like many others, have a love-hate, rollercoaster-like relationship with coding. From spending hours on a seemingly simple problem only to solve it in minutes after taking a break, to experiencing the joy of seeing your code work without knowing exactly how you did it—coding is a journey of highs and lows. In the end, I genuinely enjoy the challenge of solving problems and the satisfaction of seeing the final product come together.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-gray-300",
    },
  ];
  return (
    <div className="bg-customSecondaryBG py-[4rem] md:py-[7rem]">
      <AnimatedComponent>
        <div className="relative z-20 mx-auto w-[87.5vw] max-w-screen-[1680px]">
          <h2 className="text-[28px] leading-[1.14] tracking-[.007em] md:text-[56px] md:leading-[1.07] md:tracking-[-.005em]">
            Get to know Me.
          </h2>
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-6 md:mt-12 xl:border rounded-md dark:border-border-gray-300">
              {features.map((feature) => (
                <FeatureCard key={feature.title} className={feature.className}>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  <div className=" h-full w-full">{feature.skeleton}</div>
                </FeatureCard>
              ))}
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`px-4 py-6 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-[21px] leading-[1.19] tracking-[.011em] md:text-[28px] md:leading-[1.14] md:tracking-[.007em]">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-[14px] leading-[1.43] tracking-[-.016em] md:text-[17px] md:leading-[1.47] md:tracking-[.022em] text-left mx-auto",
        "text-center",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <AboutMeCardStack />
  );
};

export const SkeletonThree = () => {
  return (
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 flex-col space-y-2  relative">
          <p className="pt-[1.5rem] text-[14px] leading-[1.47] tracking-[.022em]">
            Here are a few of the Apps I use
          </p>
          <div className="py-[1.5rem] grid grid-cols-2 gap-4">
          <Link
            href="https://www.riotgames.com/en"
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src={`${prefix}/riotgames.svg`}
              alt="riot games logo"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </Link>
          <Link
            href="https://www.nintendo.com/us/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src={`${prefix}/nintendo.svg`}
              alt="nintendo logo"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </Link>
          <Link
            href="https://open.spotify.com/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src={`${prefix}/spotify.svg`}
              alt="spotify logo"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </Link>
          <Link
            href="https://discord.com/"
            target="_blank"
            className="flex justify-center items-center"
          >
            <Image
              src={`${prefix}/discord.svg`}
              alt="discord logo"
              width={150}
              height={150}
              className="max-w-full h-auto"
            />
          </Link>
          </div>
        </div>
      </div>
  );
};

export const SkeletonTwo = () => {

  const images = [
    `${prefix}/tobyBaby.jpg`,
    `${prefix}/tobyBirthday.jpg`,
    `${prefix}/tobySleep.jpg`,
    `${prefix}/latteBaby2.jpg`,
  ];

  const images2 = [
    `${prefix}/latteBaby3.jpg`,
    `${prefix}/latteBaby.jpg`,
    `${prefix}/bailey.jpg`,
    `${prefix}/allDogs.jpg`,
  ];

  return (
    <div className="relative flex flex-col items-start px-8 py-4 md:p-8 gap-10 h-full overflow-hidden">
      <p className="text-[12px] leading-[1.33] tracking-[.022em] mx-auto md:ml-0">
        Click And Hold To Enlarge Images.
      </p>
      <div className="flex flex-row -ml-7 md:-ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 15 - 10,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 0,
              zIndex: 99,
            }}
            whileTap={{
              scale: 2.95,
              rotate: 0,
              zIndex: 100,
              position: "absolute",
              left: "50%",
              top: "40%",
              translateX: "-50%",
              translateY: "-50%"
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-gray-300 dark:border-gray-300 border border-gray-300 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${prefix}${image}`}
              alt="dog pictures"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row -ml-7 md:-ml-20">
        {images2.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 15 - 10,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 0,
              zIndex: 99,
            }}
            whileTap={{
              scale: 2.95,
              rotate: 0,
              zIndex: 100,
              position: "absolute",
              left: "50%",
              top: "40%",
              translateX: "-50%",
              translateY: "-50%"
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-gray-300 dark:border-gray-300 border border-gray-300 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${prefix}${image}`}
              alt="dog pictures"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export const SkeletonFour = () => {
  return (
    <div className="flex md:block mb-[-3.25rem] md:mb-0 justify-between">
      <div className="md:absolute left-[14rem] bottom-32 text-center">
        <p>Nara, Japan</p>
        <Image
          src={`${prefix}/naraPark.jpg`}
          height="150"
          width="150"
          alt=""
          className="rounded-xl border-2 border-black"
        />
      </div>
      <div className="md:absolute left-16 text-center pl-3 md:pl-0">
        <p>Honolulu, O&apos;ahu</p>
        <Image
          src={`${prefix}/hawaii.jpg`}
          height="150"
          width="150"
          alt=""
          className="rounded-xl border-2 border-black"
        />
      </div>
      <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <Globe className="absolute lg:right-0 -bottom-[10.5rem] lg:-bottom-[8rem] hidden md:block" />
      </div>
    </div>
  );
};
 
export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    let phi = 0;
 
    if (!canvasRef.current) return;
 
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.0, 0.46, 1.0], // Bright blue for oceans
      markerColor: [0.0, 0.72, 0.29], // Bright green for land
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [35.9078, 127.7669], size: 0.1 }, // South Korea
        { location: [36.2048, 138.2529], size: 0.1 }, // Japan
        { location: [34.052235, -118.243683], size: 0.1 }, // Los Angeles
        { location: [37.7749, -122.2656], size: 0.1 }, // San Francisco
        { location: [36.1716, -115.1391], size: 0.1 }, // Las Vegas
        { location: [39.9526, -75.1652], size: 0.1 }, // Philadelphia
        { location: [40.7607, -111.8939], size: 0.1 }, // Utah
        { location: [34.0489, -111.0937], size: 0.1 }, // Arizona
        { location: [44.3148, -85.6024], size: 0.1 }, // Michigan
        { location: [23.6345, -102.5528], size: 0.1 }, // Mexico
        { location: [18.8987, -155.6659], size: 0.1 }, // Hawaii
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });
 
    return () => {
      globe.destroy();
    };
  }, []);
 
  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, height: 400, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};