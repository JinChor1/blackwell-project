import CopyTrading from "@/components/home/CopyTrading";
import FastMatching from "@/components/home/FastMatching";
import EasyAnalysis from "@/components/home/EasyAnalysis";
import TradeLikePro from "@/components/home/TradeLikePro";
import HowToLink from "@/components/home/HowToLink";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NavigateOurApp from "@/components/home/NavigateOurApp";
import EnquireNow from "@/components/home/EnquireNow";
import Navbar from "@/components/navigation/Navbar";
import ScrollToTopButton from "@/components/navigation/ScrollToTop";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="pt-10">
        <CopyTrading/>
        <FastMatching/>
        <EasyAnalysis/>
        <TradeLikePro/>
        <HowToLink/>
        <WhyChooseUs/>
        <NavigateOurApp/>
        <EnquireNow/>
      </main>
      <ScrollToTopButton/>
      {/* <footer>
      </footer> */}
    </div>
  );
}
