import Image from "next/image";
import Outline from "../ui/list/Outline";
import AppStore from "../navigation/AppStore";
import GooglePlay from "../navigation/GooglePlay";
import RoundedInternal from "../ui/link/RoundedInternal";

export default function CopyTrading() {
  return (
    <div className="md:grid md:grid-cols-2 content-center">
        <div className="overflow-visible relative md:grid hidden">
            <Image
                src='/images/copytrading-hand.png'
                alt='Hand with phone'
                width={667.22}
                height={800}
                className="absolute w-[min(100vw, 667px)] h-full object-cover object-right-top right-0 -z-1"
            />
        </div>
        <div className="content-center md:py-20 w-[min(100vw,800px)] md:w-[min(50vw,800px)] overflow-hidden">
            <div>
                <h1 className="text-(--primary) text-6xl md:text-8xl text-center">COPY TRADING</h1>
                <h2 className="italic text-4xl md:text-6xl leading-none text-center text-white">with Blackwell Invest</h2>
            </div>
            <div className='flex justify-center gap-5 my-10 relative md:px-0 px-5'>
                <AppStore/>
                <GooglePlay/>
                <Image
                    src='/images/regular.png'
                    alt='Regulated image'
                    width={200}
                    height={200}
                    className='absolute -z-1 md:ml-100 md:top-0 ml-40 -top-30'
                />
            </div>
            <div className="relative md:hidden -z-1 pr-5">
                <Image
                    src='/images/copytrading-hand.png'
                    alt='Hand with phone'
                    width={667.22}
                    height={800}
                    className="top-0 -z-1 md:hidden h-[80svh] object-right-top object-cover"
                />
            </div>
            <div className="md:mt-0 -mt-30 md:px-0 px-5">
                <h3 className="text-5xl text-(--primary) md:text-left text-right">Choose & Trade</h3>
                <h3 className="italic text-4xl text-(--gold) md:text-left text-right">Ready-To-Go Strategies</h3>
                <p className="my-4 md:text-left text-right text-white">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
            </div>
            <ul className="flex flex-wrap justify-end gap-2 md:justify-start md:px-0 px-5">
                <Outline color="gold">Forex</Outline>
                <Outline color="orange">Precious Metals</Outline>
                <Outline color="error">Oil</Outline>
                <Outline color="primary">Indices</Outline>
            </ul>
            <div className="my-4 flex md:px-0 px-5 md:justify-start justify-end">
                <RoundedInternal color="orange" link='/auth/register'>REGISTER NOW</RoundedInternal>
            </div>
            <p className="italic md:px-0 px-5 md:text-left text-right text-white">When you invest, your capital is at risk. Be prudent.</p>
        </div>
    </div>
  );
}
