import Image from "next/image";
import RoundedExternal from "../ui/link/RoundedExternal";

export default function AppStore() {
    return(
        <RoundedExternal link='https://apps.apple.com/sg/app/blackwell-invest/id1666036351'>
            <Image
                src='/images/app-store.jpg'
                alt='Appstore'
                width={150}
                height={100}
                className='rounded-lg'
            />
        </RoundedExternal>
    )
}