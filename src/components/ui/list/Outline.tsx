import clsx from 'clsx';

type OutlineProps = {
    color?: 'primary' | 'orange' | 'gold' | 'error', 
    children: React.ReactNode,
}

export default function Outline({
    color='primary',
    children
}: OutlineProps) {
    const outlineClass = clsx(
        'py-1 px-4 rounded-md duration-300 border-2',
        { 
            'bg-none text-(--white) border-(--primary)': color === 'primary',
            'bg-none text-(--white) border-(--orange)': color === 'orange',
            'bg-none text-(--white) border-(--gold)': color === 'gold',
            'bg-none text-(--white) border-(--error)': color === 'error',
        },
    );

    return (
        <li 
            className={outlineClass}
        >
            {children}
        </li>
    );
}
