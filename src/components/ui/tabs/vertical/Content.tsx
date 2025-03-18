import clsx from 'clsx';

type ContentProps = {
    index: number,
    children: React.ReactNode,
}

export default function Content({
    index,
    children
}: ContentProps) {
    const contentClass = clsx(
        'md:py-8 md:px-8 md:rounded-xl md:duration-300 md:border-2 relative bg-(--primary-background)',
        {
            'border-(--orange)' : index%2===0,
            'border-(--gold)' : index%2!==0
        }
    );

    return (
        <div 
            className={contentClass}
        >
            {children}
        </div>
    );
}
