import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type SectionProps = {
    onClick: MouseEventHandler<HTMLButtonElement>,
    isSelected: boolean,
    children: React.ReactNode,
}

export default function Section({
    onClick,
    isSelected,
    children
}: SectionProps) {
    const sectionClass = clsx(
        'absolute duration-300 top-0 left-0 h-full w-full cursor-pointer rounded-t-lg hover:scale-y-110 origin-bottom transition-transform',
        { 
            'bg-(--gold)': isSelected ,
            'bg-(--white)': !isSelected ,
        }
    );

    return (
        <button 
            className='px-2 md:px-7 relative'
            onClick={onClick}
        >
            <div className={sectionClass}>
            </div>
            <div className="relative pointer-events-none">
                {children}
            </div>
        </button>
    );
}
