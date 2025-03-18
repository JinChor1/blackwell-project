import ScrollingImage from "../animation/ScrollingImage";
import ScrollingHeader from "../animation/ScrollingHeader";
import Card from "../ui/list/Card";
import RoundedInternal from "../ui/link/RoundedInternal";

export default function WhyChooseUs() {
  return (
    <div className="my-20 relative">
        <ScrollingImage source='/images/bg-2.png'/>
        <div className="z-10 flex flex-col items-center">
            <ScrollingHeader title="WHY CHOOSE US?" from='right'/>
            <ul className="px-5 md:px-20 flex flex-col mt-10 max-w-[1500px]">
                <Card image='/images/choose/icon-1.png' title='Regulated' subtitle='The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.'/>
                <Card image='/images/choose/icon-2.png' title='0 Commissions' subtitle='When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.'/>
                <Card image='/images/choose/icon-3.png' title='User-friendly' subtitle='With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!'/>
                <Card image='/images/choose/icon-4.png' title='Tier 1 liquidity' subtitle='Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.'/>
            </ul>
        </div>
        <div className="flex justify-center content-center">
            <RoundedInternal color="orange" link='/auth/register'>REGISTER NOW</RoundedInternal>
        </div>
    </div>
  );
}
