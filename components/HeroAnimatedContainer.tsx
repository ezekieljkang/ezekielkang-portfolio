import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';

interface HeroAnimatedContainerProps {
  children: ReactNode;
}

const HeroAnimatedContainer = ({ children }: HeroAnimatedContainerProps) => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  // Stop animation when width reaches 87.5vw
  const stopAtWidthVW = 87.5;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollY.get(); // Get current scrollY from useScroll
      const maxScroll = window.innerHeight;

      // Calculate scroll progress and ensure it's within bounds
      const scrollProgress = Math.min(scrollTop / maxScroll, 1);

      // Calculate the target width based on the scroll progress
      const targetWidthVW = 100 - (scrollProgress * (100 - stopAtWidthVW));

      // Only animate if the width is above the stopping width
      if (targetWidthVW > stopAtWidthVW) {
        const clipPathValue = 4.25 * scrollProgress;
        const matrixScale = 1 - (scrollProgress * 0.05);

        controls.start({
          clipPath: `inset(${clipPathValue}% round ${44 * scrollProgress}px)`,
          transform: `matrix(${matrixScale}, 0, 0, ${matrixScale}, 0, 0)`,
          transition: { duration: 1, ease: "easeInOut" }, // Adjust duration for smoother animation
        });
      } else {
        // Stop animation when width is less than or equal to stopAtWidthVW
        controls.stop();
      }
    };

    // Subscribe to scrollY changes
    const unsubscribe = scrollY.onChange(handleScroll);

    return () => {
      unsubscribe(); // Clean up subscription on unmount
    };
  }, [controls, scrollY]);

  return (
    <motion.div
      initial={{ clipPath: 'inset(0%)', transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
      animate={controls}
    >
      <motion.div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HeroAnimatedContainer;
