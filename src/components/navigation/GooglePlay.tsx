import Image from "next/image";
import RoundedExternal from "../ui/link/RoundedExternal";

export default function GooglePlay() {
    return(
        <RoundedExternal link='https://play.google.com/store/apps/details?id=com.BlackwellGlobalInvestmentsUKLimited.pelican&hl=en&pli=1'>
            <Image
                src='/images/google-play.jpg'
                alt='GooglePlay'
                width={150}
                height={100}
                className='rounded-lg'
            />
        </RoundedExternal>
    )
}