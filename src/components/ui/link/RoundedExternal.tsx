type RoundedProps = {
    link: string,
    children: React.ReactNode,
}

export default function RoundedExternal({link, children}:RoundedProps) {
    return(
        <a target="_blank" href={link} rel="noopener noreferrer" className='rounded-md overflow-hidden hover:scale-110 transition-all duration-300'>
            {children}
        </a>
    )
}