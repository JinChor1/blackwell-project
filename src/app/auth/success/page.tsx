"use client"
import RoundedInternal from "@/components/ui/link/RoundedInternal";
import { useUserStore } from "@/store/user";
import Image from "next/image";

export default function Success() {
    const userStores = useUserStore((state) => state.user);
    return (
        <main className="h-screen px-5 md:px-0 flex justify-center items-center relative transition-all duration-200 h-[calc-size(auto)]">
            <div className='bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden '>
                <div className="bg-(--secondary-background) py-1 px-4 justify-center items-center hidden md:flex">
                    <Image
                        src={'/images/blackwelllogo.png'}
                        alt="Blackwell Global Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="py-10 px-5 md:px-10 flex flex-col text-center justify-center items-center md:w-md">
                    <Image
                        src={'/images/success.gif'}
                        alt="Success Lottie"
                        width={100}
                        height={100}
                    />
                    <div className="mt-10 items-center justify-center flex flex-col">
                        <h1 className="text-(--secondary-background) text-5xl text-center">Hi, {userStores?.username}</h1>
                        <h2 className="italic text-3xl text-center text-(--disabled) mt-2">Welcome to Blackwell</h2>
                        <h3 className="text-xl text-center text-(--dark)">Please verify your email immediately!</h3>
                    </div>

                    <div className="mt-20">
                        <RoundedInternal link='/' color='orange'>Back to home</RoundedInternal>
                    </div>
                </div>
            </div>
        </main>
    );
}
