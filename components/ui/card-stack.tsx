"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 8500);
  };

  return (
    <div className="relative h-60 w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-customBlue bg-white h-60 w-full md:h-60 md:w-96 rounded-3xl p-4 shadow-md border border-gray-200 dark:border-gray-300 shadow-gray-500/[0.2] dark:shadow-gray-400/[0.1] flex flex-col justify-center gap-6"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div>
              <p className="text-[17px] text-white leading-[1.47] tracking-[.022em]">
                {card.name}
              </p>
              <p className="text-[17px] text-white leading-[1.47] tracking-[.022em]">
                {card.designation}
              </p>
            </div>
            <div className="text-[15px] leading-[1.43] tracking-[-.016em] md:text-[17px] text-white md:leading-[1.47] md:tracking-[.022em]">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
