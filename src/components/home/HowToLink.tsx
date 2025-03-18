import ScrollingHeader from "../animation/ScrollingHeader";
import Carousel from "../ui/carousel";
import Image from "next/image";
import RoundedInternal from "../ui/link/RoundedInternal";

type CarouselCardProps = {
    image: string,
    title: string,
    isFirst?: boolean,
}

function CarouselCard({image, title, isFirst=false}: CarouselCardProps) {
    return(
        <div className='flex flex-col h-full justify-center items-center text-center rounded-3xl py-10 border-4 border-(--orange) relative'>
            <Image src={image} alt={title} width={400} height={700} className="z-[1000]"/> 
            <h3 className='max-w-[400px] md:px-0 px-5 z-[1000]'>{title}</h3>
            { !isFirst &&
                <Image className='absolute -left-38 bg-(--primary-background)' src={'/images/arrow.png'} alt={'arrow'} width={200} height={300}/> 
            }
        </div>
    )
}

export default function HowToLink() {
  return (
    <div className="py-10">
        <ScrollingHeader title="HOW TO LINK" from='right'/>
        <ScrollingHeader title="MT4 ACCOUNT"/>
        <Carousel
            slides={[
                (
                    <CarouselCard key={'Install our app, “Blackwell Invest”'} image={'/images/register/step-1.png'} title='Install our app, “Blackwell Invest”' isFirst={true}/>
                ),
                (
                    <CarouselCard key={'Login OR create a new account'} image={'/images/register/step-2.png'} title='Login OR create a new account'/>
                ),
                (
                    <CarouselCard key={'Click “Account”'} image={'/images/register/step-3.png'} title='Click “Account”'/>
                ),
                (
                    <CarouselCard key={'Click “Link an account”'} image={'/images/register/step-4.png'} title='Click “Link an account”'/>
                ),
                (
                    <CarouselCard key={'Select “BlackwellGlobalAsia-Live” server'} image={'/images/register/step-5.png'} title='Select “BlackwellGlobalAsia-Live” server'/>
                ),
                (
                    <CarouselCard key={'Fill in your Blackwell Global trading account OR create a new account'} image={'/images/register/step-6.png'} title='Fill in your Blackwell Global trading account OR create a new account'/>
                ),
                (
                    <CarouselCard key={'Click “Copy Trades”'} image={'/images/register/step-7.png'} title='Click “Copy Trades”'/>
                ),
                (
                    <CarouselCard key={'Click “Done”'} image={'/images/register/step-8.png'} title='Click “Done”'/>
                ),
            ]}
        />
        <div className=" flex justify-center">
            <RoundedInternal color="orange" link='/auth/register'>REGISTER NOW</RoundedInternal>
        </div>
    </div>
  );
}
