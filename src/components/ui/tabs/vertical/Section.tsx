import clsx from 'clsx';
import { MouseEventHandler } from 'react';

type SectionProps = {
    index: number,
    onClick: MouseEventHandler<HTMLButtonElement>,
    isSelected: boolean,
    children: React.ReactNode,
}

export default function Section({
    index,
    onClick,
    isSelected,
    children
}: SectionProps) {
    const sectionClass = clsx(
        'absolute top-0 left-0 w-full h-full duration-300 border-2 cursor-pointer origin-left transition-transform bg-(--primary-background)',
        {
            'border-(--orange) hover:text-(--orange)' : index%2===0,
            'border-(--gold) hover:text-(--gold)' : index%2!==0
        },
        { 
            'md:scale-x-120 md:border-r-0 rounded-xl md:rounded-none md:rounded-s-xl md:rounded-l-xl': isSelected ,
            'hover:scale-x-105 hover:shadow-md  rounded-xl': !isSelected ,
        }
    );

    return (
        <button 
            className={'py-8 px-8 relative'}
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
