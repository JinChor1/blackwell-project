import Image from "next/image";
import ScrollingHeader from "../animation/ScrollingHeader";
import ScrollingText from "../animation/ScrollingText";
import FloatingImage from "../animation/ScrollingFloatImage";

export default function EasyAnalysis() {
  return (
    <div className="py-10">
      <ScrollingHeader title="EASY ANALYSIS" from='right'/>
      <ScrollingText title="Instant clarity on the Masters’ profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place."/>
      <div className="flex justify-center content-center  py-10">
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-2 overflow-hidden">
            <FloatingImage image='/images/analysis/function-1.png' index={0}/>
            <div></div><div></div>
            <FloatingImage image='/images/analysis/function-2.png' index={1}/>
            <div></div><div></div>
            <FloatingImage image='/images/analysis/function-3.png' index={2}/>
            <div></div><div></div>
            <FloatingImage image='/images/analysis/function-4.png' index={3}/>
            <div></div><div></div>
            <FloatingImage image='/images/analysis/function-5.png' index={4}/>
          </div>
          <Image
            src='/images/easyanalysis-mobile.png'
            alt='Easy enalysis'
            width={250}
            height={400}
            className="shadow-lg rounded-[2rem] absolute -z-1"
          />
        </div>
      </div>
    </div>
  );
}
