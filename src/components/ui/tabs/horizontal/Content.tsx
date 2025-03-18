import clsx from 'clsx';

type ContentProps = {
    children: React.ReactNode,
}

export default function Content({
    children
}: ContentProps) {
    const contentClass = clsx(
        'pt-8 px-5 md:px-20 rounded-xl rounded-tl-none duration-300 z-2 bg-(--gold) z-2',
    );

    return (
        <div 
            className={contentClass}
        >
            {children}
        </div>
    );
}
