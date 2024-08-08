import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedComponentProps {
  children: ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
