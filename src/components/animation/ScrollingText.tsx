"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ScrollingTextProps = {
    title?: string
}

export default function ScrollingText({title}:ScrollingTextProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 1", "start 0.95"], 
  });

  const springY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  const y = useTransform(springY, [0, 1],["100%", "0%"]); 

  return (
    <div className="overflow-hidden px-5 md:px:0 flex justify-center">
        <motion.h2
            ref={targetRef} 
            className="text-(--gold) text-center max-w-[900px]"
            style={{opacity: scrollYProgress, y}}
        >
            {title}
        </motion.h2>
    </div>
  );
}