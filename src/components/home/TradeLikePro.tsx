import Image from "next/image";
import ScrollingHeader from "../animation/ScrollingHeader";
import ScrollingImage from "../animation/ScrollingImage";
import VerticalTabs from "../ui/tabs/vertical";
import clsx from "clsx";
import AppStore from "../navigation/AppStore";
import GooglePlay from "../navigation/GooglePlay";

function TradeSection({index, title}:{index: number, title: string}) {
  const titleClass = clsx(
    'mr-4 text-5xl italic',
    { 
      'text-(--gold)': index%2 === 0,
      'text-(--orange)': index%2 !== 0
    },
  );

  return(
    <div className='flex items-center'><h1 className={titleClass}>{index}</h1><h3>{title}</h3></div>
  )
}

function SelectedTradeSection({index, title}:{index: number, title: string}) {
  const titleClass = clsx(
    'mr-4 text-5xl italic',
    { 
      'text-(--gold)': index%2 === 0,
      'text-(--orange)': index%2 !== 0
    },
  );

  return(
    <div className='flex items-center'><h1 className={titleClass}>{index}</h1><h3 className="text-(--primary)">{title}</h3></div>
  )
}


export default function TradeLikePro() {
  return (
    <div className="my-20 relative">
        <ScrollingImage source='/images/bg-1.png'/>
        <div className="z-10">
            <ScrollingHeader title="TRADE LIKE A PRO"/>
            <ScrollingHeader title="IN MINUTES" from='right'/>
            <div className="my-10">
              <VerticalTabs 
                data={[
                  {
                    section: (<TradeSection index={1} title='Install our app, “Blackwell Invest”'/>),
                    selectedSection: (<SelectedTradeSection index={1} title='Install our app, “Blackwell Invest”'/>),
                    content: (<Image src={'/images/guide/guide-1.png'} alt={'Step 1 guide to install'} width={400} height={500}/>)
                  },
                  {
                    section: (<TradeSection index={2} title='Choose a signal Master and click “Copy”'/>),
                    selectedSection: (<SelectedTradeSection index={2} title='Choose a signal Master and click “Copy”'/>),
                    content: (<Image src={'/images/guide/guide-2.png'} alt={'Step 2 guide to install'} width={400} height={500}/>)
                  },
                  {
                    section: (<TradeSection index={3} title='Set your trade size preferences'/>),
                    selectedSection: (<SelectedTradeSection index={3} title='Set your trade size preferences'/>),
                    content: (<Image src={'/images/guide/guide-3.png'} alt={'Step 3 guide to install'} width={400} height={500}/>)
                  },
                  {
                    section: (<TradeSection index={4} title='Click “Agree and Copy”'/>),
                    selectedSection: (<SelectedTradeSection index={4} title='Click “Agree and Copy”'/>),
                    content: (<Image src={'/images/guide/guide-4.png'} alt={'Step 4 guide to install'} width={400} height={500}/>)
                  },
                ]}
              />
            </div>
            <div className='flex justify-center gap-5 my-10 md:px-0 px-5'>
              <AppStore/>
              <GooglePlay/>
            </div>
        </div>
    </div>
  );
}