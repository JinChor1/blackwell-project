"use client"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type CardProps = {
    image: string,
    title: string,
    subtitle: string,
}

export default function Card({
    image,
    title,
    subtitle
}: CardProps) {
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
            className='md:flex text-2xl items-center rounded-2xl bg-white mb-10 px-4 py-4 max-w-[1920px] w-full mx-auto '
            style={{opacity: scrollYProgress, y}}
            ref={targetRef}
        >
            <div className="flex-1 flex items-center">
                <Image
                    src={image}
                    alt={'Icon of '+title}
                    width={75}
                    height={75}
                />
                <h2 className=" flex-1 text-(--secondary) ml-2 text-center">{title}</h2>
            </div>
            <p className="text-lg text-(--dark) flex-3 ">{subtitle}</p>
        </motion.li>
    );
}
