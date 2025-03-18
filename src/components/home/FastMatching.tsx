import ScrollingHeader from "../animation/ScrollingHeader";
import ScrollingText from "../animation/ScrollingText";
import ListIcon from "../ui/list/ListIcon";

export default function FastMatching() {
  return (
    <div className="py-10 mt-30">
        <ScrollingHeader title="FAST MATCHING"/>
        <ScrollingText title="Zero in on your ideal Master effortlessly. Sort by performance and drawdown levels or discover opportunities from new signals with our smart filters. Still can’t decide? Simply head over to Spotlight for quality signals curated by us."/>
        {/* <ScrollingText title="Sort by performance and drawdown levels or discover opportunities from new signals with our smart filters."/>
        <ScrollingText title="Still can’t decide? Simply head over to Spotlight for quality signals curated by us."/> */}
        <div className="flex md:flex-row flex-col justify-center content-center md:gap-30 gap-10 my-10 md:px-0 px-10">
            <video
              src='/videos/mobile-video.mov'
              loop
              autoPlay
              muted
              playsInline
              controls={false}
              className="md:max-w-full md:max-h-[500px] rounded-[2rem] shadow-lg"
            />
            <ul className="flex flex-col justify-center md:px-0 px-5">
                <ListIcon>Spotlight</ListIcon>
                <ListIcon>Top Strategies</ListIcon>
                <ListIcon>Low Drawdown</ListIcon>
                <ListIcon>Medium Drawdown</ListIcon>
                <ListIcon>High Drawdown</ListIcon>
                <ListIcon>New Strategies</ListIcon>
            </ul>
        </div>
    </div>
  );
}
