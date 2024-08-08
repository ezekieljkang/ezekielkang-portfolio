'use client'

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedComponent from "./AnimatedComponent";

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
      title: "The Pups",
      description:
        "Toby is the brown Red Tri Australian Shepherd, Latte is the golden Cocker Spaniel/Poodle mix, and Bailey is the black Maltese/Yorkshire Terrier.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-gray-300",
    },
    {
      title: "Free time.",
      description:
        "I enjoy playing online games and listening to music.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-gray-300",
    },
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none border-gray-300",
    },
  ];
  return (
    <div className="bg-customSecondaryBG py-[7rem]">
      <AnimatedComponent>
        <div className="relative z-20 mx-auto w-[87.5vw] max-w-screen-[1680px]">
          <h2 className="text-[56px] leading-[1.07] tracking-[-.005em]">
            Get to know Me.
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-border-gray-300">
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
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-[28px] leading-[1.14] tracking-[.007em]">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-[17px] leading-[1.47] tracking-[.022em] text-left mx-auto",
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
    <div className="flex py-8 px-2 gap-10">
      <div className="">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/linear.webp"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href=""
      target="__blank"
      className="relative flex gap-10"
    >
      <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 flex-col space-y-2  relative">
          {/* TODO */}
          <Image
            src=""
            alt="header"
            width={800}
            height={800}
          />
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/tobyBaby.jpg",
    "/tobyBirthday.jpg",
    "/tobySleep.jpg",
    "/latteBaby2.jpg",
  ];

  const images2 = [
    "/latteBaby3.jpg",
    "/latteBaby.jpg",
    "/bailey.jpg",
    "/allDogs.jpg",
  ]

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-7 md:-ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 15 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-gray-300 dark:border-gray-300 border border-gray-300 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
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
              rotate: Math.random() * 30 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-gray-300 dark:border-gray-300 border border-gray-300 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
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
    <div>
      <div className="absolute left-[14rem] bottom-32 text-center">
        <p>Japan</p>
        <Image
          src="/naraPark.jpg"
          height="150"
          width="150"
          alt=""
          className="rounded-xl border-2 border-black"
        />
      </div>
      <div className="absolute left-16 text-center">
        <p>Hawaii</p>
        <Image
          src="/hawaii.jpg"
          height="150"
          width="150"
          alt=""
          className="rounded-xl border-2 border-black"
        />
      </div>
      <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
        <Globe className="absolute -right-10 md:-right-10 -bottom-[13rem]" />
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
      width: 600 * 2,
      height: 600 * 2,
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
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};