"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function AboutMeCardStack() {
  return (
    <div className="py-10 pr-0 md:pr-10 md:h-[20rem] flex items-center justify-center w-full md:w-[150%]">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "px-1 py-0.5 text-black",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "My Design Inspirations",
    designation: "Apple, Dropbox, Airbnb",
    content: (
      <p>
        I&apos;m drawn to their<Highlight>clean, user-friendly interfaces</Highlight>and<Highlight>innovative use of space and color</Highlight>.They set a high standard in UI design that motivates me to create intuitive and visually appealing projects.
      </p>
    ),
  },
  {
    id: 1,
    name: "Accessibility in Design",
    designation: "Google, Apple, Microsoft, W3C",
    content: (
      <p>
        <Highlight>Accessibility and inclusivity</Highlight> are cornerstones of effective design. I strive to create products that are not only functional but also welcoming and usable for all users, including those with disabilities.
      </p>
    ),
  },
  {
    id: 2,
    name: "Coding Resources",
    designation: "The Odin Project",
    content: (
      <p>
        I&apos;ve learned so much from <Highlight>The Odin Project</Highlight>, and I want to extend a heartfelt thank you to the community. The resources and support provided have been invaluable in my coding journey and has truly made a difference.
      </p>
    ),
  },
];
