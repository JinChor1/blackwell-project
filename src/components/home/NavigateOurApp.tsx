import ScrollingHeader from "../animation/ScrollingHeader";
import AppStore from "../navigation/AppStore";
import GooglePlay from "../navigation/GooglePlay";
import HorizontalTabs from '../ui/tabs/horizontal';
import Image from "next/image";

function NavigateContent({title, description, image}:{title: string, description: string, image: string}) {
    return (
        <div className='md:flex justify-center gap-20'>
            <div className='flex-1 content-center'>
                <h1 className='text-(--secondary)'>{title}</h1>
                <p className='text-(--dark) text-xl'>{description}</p>
            </div>
            <Image src={image} alt={"Discover's screenshot"} width={400} height={500}/>
        </div>
    )
}

export default function NavigateOurApp() {
  return (
    <div className="py-10 flex flex-col items-center ">
        <ScrollingHeader title="NAVIGATE OUR APP"/>
        <ScrollingHeader title="IN 5 CLICKS" from='right'/>
        <div className="my-10 px-5 md:px-20 max-w-[1500px] ">
            <HorizontalTabs 
                data={[
                    {
                        section: (<Image src={'/images/navigate/icon1.png'} alt={'Discover icon'} width={50} height={50}/>),
                        selectedSection: (<Image src={'/images/navigate/icon1-blue.png'} alt={'Discover icon'} width={50} height={50}/>),
                        content: (
                            <NavigateContent 
                                title='Discover' 
                                description="Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance." 
                                image='/images/reason/reason-1.png'
                            />
                        )
                    },
                    {
                        section: (<Image src={'/images/navigate/icon2.png'} alt={'Activity icon'} width={50} height={50}/>),
                        selectedSection: (<Image src={'/images/navigate/icon2-blue.png'} alt={'Activity icon'} width={50} height={50}/>),
                        content: (
                            <NavigateContent 
                                title='Activity' 
                                description="See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio." 
                                image='/images/reason/reason-2.png'
                            />
                        )
                    },
                    {
                        section: (<Image src={'/images/navigate/icon3.png'} alt={'Trade icon'} width={50} height={50}/>),
                        selectedSection: (<Image src={'/images/navigate/icon3-blue.png'} alt={'Trade icon'} width={50} height={50}/>),
                        content: (
                            <NavigateContent 
                                title='Trade' 
                                description="Seamlessly trade oil CFDs, indices, and currency pairs with ease." 
                                image='/images/reason/reason-3.png'
                            />
                        )
                    },
                    {
                        section: (<Image src={'/images/navigate/icon4.png'} alt={'Positions icon'} width={50} height={50}/>),
                        selectedSection: (<Image src={'/images/navigate/icon4-blue.png'} alt={'Positions icon'} width={50} height={50}/>),
                        content: (
                            <NavigateContent 
                                title='Positions' 
                                description="Easily track the status of all your trades and monitor your account metrics in real-time." 
                                image='/images/reason/reason-4.png'
                            />
                        )
                    },
                    {
                        section: (<Image src={'/images/navigate/icon5.png'} alt={'Account icon'} width={50} height={50}/>),
                        selectedSection: (<Image src={'/images/navigate/icon5-blue.png'} alt={'Account icon'} width={50} height={50}/>),
                        content: (
                            <NavigateContent 
                                title='Account' 
                                description="Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!" 
                                image='/images/reason/reason-5.png'
                            />
                        )
                    },
                ]}
            />
            <div className='flex justify-center gap-5 my-10'>
                <AppStore/>
                <GooglePlay/>
            </div>
        </div>
    </div>
  );
}
