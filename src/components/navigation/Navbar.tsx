import Image from "next/image";
import Timer from "../timer";
import NavbarUser from "./NavbarUser";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full flex justify-between content-center bg-(--secondary-background) py-4 px-4 z-99">
        <div className="content-center">
            <Image
                src="/images/blackwelllogo.png"
                alt="Black Well Global logo"
                width={180}
                height={38}
                priority
            />
        </div>
        <div className="hidden md:block">
            <Timer targetDate='2025-04-20T12:00:00'/>
        </div>
        <NavbarUser/>
    </div>
  );
}
