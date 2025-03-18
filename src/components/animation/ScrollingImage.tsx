"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type ScrollingImageProps = {
    source?: string
}

export default function ScrollingImage({source}:ScrollingImageProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], 
  });

  const springX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const x = useTransform(springX, [0, 1], ["0%", "-60%"]); 

  return (
    <div className="absolute top-0 -z-10">
        <div ref={targetRef} className="h-[100vh] overflow-hidden">
            <motion.img
                src={source}
                alt="Wide Image"
                className="w-[200%] h-full object-cover object-left-top scale-120 overflow-visible"
                style={{ x }}
            />
        </div>
    </div>
  );
}