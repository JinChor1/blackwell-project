"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type OutlineProps = {
    children: React.ReactNode,
}

export default function ListIcon({
    children
}: OutlineProps) { 
    const targetRef = useRef<HTMLLIElement>(null);
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
        <motion.li 
            className='flex gap-10 text-2xl content-center mb-10'
            style={{opacity: scrollYProgress, y}}
            ref={targetRef}
        >
            <div className="flex-1 flex items-center">
                <Image
                    src="/images/list-icon.png"
                    alt="List icon"
                    width={90}
                    height={20}
                />
            </div>
            <div className="flex-2 text-white">
                {children}
            </div>
        </motion.li>
    );
}
