"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import AnimatedComponent from "./AnimatedComponent";
import { LinkPreview } from "@/components/ui/link-preview";

const prefix = '/ezekielkang-portfolio';

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="mx-auto w-[87.5vw] max-w-screen-[1680px] pt-20 pb-10 md:py-20">
      <AnimatedComponent>
        <h2 className='text-[28px] leading-[1.14] tracking-[.007em] md:text-[56px] md:leading-[1.07] md:tracking-[-.005em]'>
          Explore my Work.
        </h2>
        <Carousel items={cards} />
      </AnimatedComponent>
    </div>
  );
}

const PortfolioContent = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Explore my{" "}
          <LinkPreview
            url="https://ezekieljkang.github.io/portfolio-template/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Portfolio Template
          </LinkPreview>{" "}
          , built with NextJS. This dynamic and responsive website showcases my work as a web developer, featuring interactive elements, smooth transitions, and a password-protected area for exclusive content. This project demonstrates my skills in implementing modern web technologies and ensuring a seamless user experience.{" "}
          <LinkPreview
            url="https://github.com/ezekieljkang/portfolio-template"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            View source code.
          </LinkPreview>{" "}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> Next.js, React, Tailwind CSS, TypeScript, GitHub Pages, and Lottie.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> Dynamic Content Rendering, Responsive Design, Secure Authentication, and Animation Integration.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Interactive Elements, Smooth Transitions, GitHub Pages Deployment, and Automated Build and Deployment with GitHub Actions.
        </p>
        <a 
          href="https://ezekieljkang.github.io/portfolio-template/"
          target="_blank"
        >
          <Image
            src={`${prefix}/portfoliotemplate.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
    </>
  );
};

const UsedCarsProject = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Discover my <LinkPreview
            url="https://github.com/ezekieljkang/usedCarListing"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-blue-500"
          >
            Used Car Listing application
          </LinkPreview>. This web application showcases a comprehensive inventory of used cars with real-time updates and detailed information. Users can browse through a wide range of vehicles and view detailed car profiles. With a sleek and intuitive interface, this project demonstrates my expertise in Express, EJS, and MongoDB integration. {" "}
          <LinkPreview
            url="https://github.com/ezekieljkang/usedCarListing"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-500 to-blue-500"
          >
            View source code.
          </LinkPreview>{" "}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> Express, EJS, MongoDB, and Bootstrap.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> Real-Time Data Handling, and Dynamic Content Rendering.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Comprehensive Car Listings, Detailed Vehicle Information, and User-Friendly Design.
        </p>
        <a 
          href="https://github.com/ezekieljkang/usedCarListing"
          target="_blank"
        >
          <Image
            src={`${prefix}/carmostdata.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
    </>
  );
};

const LibraryProject = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        Explore my <LinkPreview
          url="https://github.com/ezekieljkang/localLibrary"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Local Library project
        </LinkPreview>. This basic Express website provides a platform to manage library records efficiently. Users can browse books, authors, genres, and book instances dynamically, with the ability to create new records seamlessly. {" "}
        <LinkPreview
          url="https://github.com/ezekieljkang/localLibrary"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          View source code.
        </LinkPreview>{" "}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> HTML/CSS, JavaScript, Express, Pug, and Bootstrap.
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> Dynamic Content Rendering, Form Handling, and RESTful API Integration.
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Record Management, User-Friendly Interface, and Responsive Design.
      </p>
        <a 
          href="https://github.com/ezekieljkang/localLibrary"
          target="_blank"
        >
          <Image
            src={`${prefix}/libraryhome.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          Create Book Page
        </p>
        <Image
            src={`${prefix}/librarycreatebook.png`}
            alt="giphy images with search option"
            height="1850"
            width="1000"
            className="md:w-[90%] md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
      </div>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          Book Instance Page
        </p>
        <Image
            src={`${prefix}/libraryinstance.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-[90%] md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
      </div>
    </>
  )
}

const GeminiProject = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Discover the capabilities of my <LinkPreview
            url="https://ezekieljkang.github.io/gemini-clone/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Gemini Clone project
          </LinkPreview>. This web application leverages Google&apos;s Generative AI to provide intelligent responses based on user input. With a sleek, responsive design, it showcases my expertise in integrating AI models, managing dynamic content, and ensuring a smooth user experience. {" "}
          <LinkPreview
            url="https://github.com/ezekieljkang/gemini-clone"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            View source code.
          </LinkPreview>{" "}
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> React, Vite, Tailwind CSS, and Google&apos;s Generative AI.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> AI Integration, Responsive Design, and Dynamic Content Rendering.
        </p>

        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Intelligent AI Responses, Interactive UI Components, and Real-Time Data Handling.
        </p>
        <a 
          href="https://ezekieljkang.github.io/gemini-clone/"
          target="_blank"
        >
          <Image
            src={`${prefix}/geminiclone.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
    </>
  )
}

const TShirtProject = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Unleash your creativity with my interactive <LinkPreview
            url="https://ezekieljkang.github.io/t-shirt-maker/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            T-shirt Maker project
          </LinkPreview>. This web application allows users to customize T-shirts in real-time, choosing text, font, size, and color. With a user-friendly interface, the project showcases my skills in integrating dynamic features and handling user inputs. {" "}
          <LinkPreview
            url="https://github.com/ezekieljkang/t-shirt-maker"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            View source code.
          </LinkPreview>{" "}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> HTML/CSS, JavaScript, and Bootstrap.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> Dynamic Content Rendering, Form Handling, and Real-Time Updates.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Custom Text and Design Options, Real-Time T-shirt Preview, and Shopping Cart Integration.
        </p>
        <a 
          href="https://ezekieljkang.github.io/t-shirt-maker/"
          target="_blank"
        >
          <Image
            src={`${prefix}/tshirtmaker.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
    </>
  )
}

const GiphyProject = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Explore the fun of GIFs with my interactive{" "}
          <LinkPreview
            url="https://ezekieljkang.github.io/giphyApi/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Giphy API project.
          </LinkPreview>{" "}
          This application lets you search for GIFs based on your preferred terms and displays them instantly. Leveraging the Giphy API, this project demonstrates my ability to integrate third-party APIs into web applications for a dynamic user experience.{" "}
          <LinkPreview
            url="https://github.com/ezekieljkang/giphyApi"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            View source code.
          </LinkPreview>{" "}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> HTML/CSS, JavaScript, and Giphy API.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> API Integration, Asynchronous JavaScript, and User Interaction.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Instant GIF Updates, Error Handling, and User-Friendly Interface.
        </p>
        <a 
          href="https://ezekieljkang.github.io/giphyApi/"
          target="_blank"
        >
          <Image
            src={`${prefix}/giphypage.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
    </>
  )
}
const LandingPageProject = () => {
  return (
    <>
      <div
        key={"content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          Explore the dynamic features of my <LinkPreview
            url="https://ezekieljkang.github.io/ev-page/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            EV page project
          </LinkPreview>. This web application features an interactive hero section with video and image backgrounds, a navigation bar, and smooth transitions. It demonstrates my skills in using React for dynamic UI elements and integrating multimedia content. {" "}
          <LinkPreview
            url="https://github.com/ezekieljkang/ev-page"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            View source code.
          </LinkPreview>{" "}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Technologies Used:</span> React, Vite, Tailwind CSS, and PropTypes.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Skills Utilized:</span> Dynamic Content Management, Multimedia Integration, and Responsive Design.
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">Project Highlights:</span> Interactive Hero Section with Video and Image Backgrounds, Responsive Navbar, and Smooth Transitions.
        </p>
        <a 
          href="https://ezekieljkang.github.io/ev-page/"
          target="_blank"
        >
          <Image
            src={`${prefix}/evpage.png`}
            alt="giphy images with search option"
            height="1500"
            width="1000"
            className="md:w-3/4 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-[1.5rem]"
          />
        </a>
      </div>
    </>
  )
}

const data = [
  {
    category: "Personal Projects",
    title: "A simple and elegant personalized portfolio.",
    src: "/ezekielkang-portfolio/project1.png",
    content: <PortfolioContent />,
  },
  {
    category: "Full-Stack Projects",
    title: "A used car inventory system with database integration.",
    src: "/ezekielkang-portfolio/carmost.png",
    content: <UsedCarsProject />,
  },
  {
    category: "Backend Projects",
    title: "A local library management system with CRUD functionality.",
    src: "/ezekielkang-portfolio/locallibrary.png",
    content: <LibraryProject />,
  },
  {
    category: "API Projects",
    title: "A clone of Google Gemini utilizing its API for dynamic features.",
    src: "/ezekielkang-portfolio/geminithumbnail.jpg",
    content: <GeminiProject />,
  },
  {
    category: "Interactive Design",
    title: "A real-time t-shirt customizer allowing users to personalize designs.",
    src: "/ezekielkang-portfolio/tshirt.png",
    content: <TShirtProject />,
  },
  {
    category: "API Projects",
    title: "Dynamic GIF Search with Giphy API",
    src: "/ezekielkang-portfolio/gipylogo.jpg",
    content: <GiphyProject />,
  },
  {
    category: "Design Projects",
    title: "A visually appealing landing page designed for electric vehicles.",
    src: "/ezekielkang-portfolio/evlanding.png",
    content: <LandingPageProject />,
  },
];
