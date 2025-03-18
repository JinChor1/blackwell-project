"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ScrollingHeaderProps = {
    title?: string
    from?: 'left' | 'right',
}

export default function ScrollingHeader({title, from='left'}:ScrollingHeaderProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.5"], 
  });

  const springX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const x = useTransform(springX, [0, 1], from==='left'?["-5%", "0%"]:["5%", "0%"]); 

  return (
    <div className="overflow-hidden px-5 md:px:0">
        <motion.h1
            ref={targetRef} 
            className="text-(--primary) text-6xl md:text-8xl text-center"
            style={{opacity: scrollYProgress, x}}
        >
            {title}
        </motion.h1>
    </div>
  );
}