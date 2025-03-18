"use client"
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function FloatingImage({image, index}: {image: string, index:number}){
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "start 0.9"], 
    });

    const spring = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        mass: 1,
    });

    const rotate = useTransform(spring, [0, 1], index%2===0?["-10deg", "0deg"] : ["10deg", "0deg"]); 
    const x = useTransform(spring, [0, 1], index%2===0?["-50%", "0%"]:["50%", "0%"]); 
    const y = useTransform(spring, [0, 1], index%2===0?["-10%", "0%"]:["10%", "0%"]); 


  return(
    <motion.div ref={targetRef} style={{rotate,x,y}} className="max-w-[250px] w-[50vw]">
      <Image
        src={image}
        alt={'Function'+index}
        width={250}
        height={400}
        className="rounded-[2rem] h-full w-full"
      />
    </motion.div>
  )
}