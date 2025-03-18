"use client"
import clsx from "clsx";
import { useTransitionRouter } from "next-view-transitions"
import Link from "next/link";
import { slideInOut } from "@/util/transition";

type PillProps = {
    color?: 'primary' | 'secondary' | 'orange' | 'dark' | 'white', 
    type?: 'solid' | 'outline',
    link: string,
    children: React.ReactNode,
}

export default function PillInternal({
    color='primary',
    type='solid',
    link,
    children
}:PillProps) {
    const router = useTransitionRouter();

    const pillClasses = clsx(
        'py-2 px-4 rounded-full hover:scale-110 cursor-pointer duration-300 inline-block',
        { 
            'bg-(--primary) text-(--white)': color === 'primary' && type === 'solid',
            'bg-(--secondary) text-(--white)': color === 'secondary' && type === 'solid',
            'bg-(--orange) text-(--white)': color === 'orange' && type === 'solid',
            'bg-(--dark) text-(--white)': color === 'dark' && type === 'solid',
            'bg-(--white) text-(--dark)': color === 'white' && type === 'solid',
            'bg-none text-(--primary) border-2 border-(--primary)': color === 'primary' && type === 'outline',
            'bg-none text-(--secondary) border-2 border-(--secondary)': color === 'secondary' && type === 'outline',
            'bg-none text-(--orange) border-2 border-(--orange)': color === 'orange' && type === 'outline',
            'bg-none text-(--dark) border-2 border-(--dark)': color === 'dark' && type === 'outline',
            'bg-none text-(--white) border-2 border-(--white)': color === 'white' && type === 'outline',
        },
    );

    return(
        <Link
            className={pillClasses}
            onClick={(e)=>{
                e.preventDefault();
                router.push(link,{
                    onTransitionReady: slideInOut,
                })
            }}
            href={link}
        >
            {children}
        </Link>
    )
}