import ScrollingHeader from "../animation/ScrollingHeader";
import ScrollingImage from "../animation/ScrollingImage";
import EnquiryForm from "../forms/EnquiryForm";

export default function EnquireNow() {
  return (
    <div className="mt-20 relative flex flex-col items-center">
        <ScrollingImage source='/images/bg-1.png'/>
        <div className="z-10 w-[min(90vw,1000px)]">
          <ScrollingHeader title="ENQUIRE NOW"/>
          <div className='px-5 md:px-20 pt-20 pb-20 md:pb-0 w-full'>
            <EnquiryForm/>
          </div>
        </div>
    </div>
  );
}
