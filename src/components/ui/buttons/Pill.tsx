"use client"
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

type PillProps = {
    color?: 'primary' | 'secondary' | 'orange' | 'dark' | 'white', 
    type?: 'solid' | 'outline',
    children: React.ReactNode,
}

export default function Pill({
    color='primary',
    type='solid',
    children
}: PillProps) {
    const { pending } = useFormStatus();

    const pillClasses = clsx(
        'py-2 px-4 rounded-full cursor-pointer duration-300',
        { 
            'bg-(--primary) text-white hover:scale-110': color === 'primary' && type === 'solid' && !pending,
            'bg-(--secondary) text-white hover:scale-110': color === 'secondary' && type === 'solid' && !pending,
            'bg-(--orange) text-white hover:scale-110': color === 'orange' && type === 'solid' && !pending,
            'bg-(--dark) text-white hover:scale-110': color === 'dark' && type === 'solid' && !pending,
            'bg-(--white) text-(--dark) hover:scale-110': color === 'white' && type === 'solid' && !pending,
            'bg-none text-(--primary) border-2 border-(--primary) hover:scale-110': color === 'primary' && type === 'outline' && !pending,
            'bg-none text-(--secondary) border-2 border-(--secondary) hover:scale-110': color === 'secondary' && type === 'outline' && !pending,
            'bg-none text-(--orange) border-2 border-(--orange) hover:scale-110': color === 'orange' && type === 'outline' && !pending,
            'bg-none text-(--dark) border-2 border-(--dark) hover:scale-110': color === 'dark' && type === 'outline' && !pending,
            'bg-none text-(--white) border-2 border-(--white) hover:scale-110': color === 'white' && type === 'outline' && !pending,
        },
        {
            'bg-(--disabled) text-white': pending
        }
    );

    return (
        <button 
            disabled={pending}
            className={pillClasses}
        >
            {pending? 'Loading': children}
        </button>
    );
}
