type TextProps = {
    type: 'text' | 'email' | 'tel',
    id: string,
    name: string,
    isRequired?: boolean,
    placeholder: string,
}

export default function Text({type, id, name, isRequired=false, placeholder}:TextProps) {
    return(
        <div className="">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                required={isRequired}
                className="w-full bg-transparent text-(--white)
                    placeholder:text-(--white)/60 border-2 border-(--white)/60
                    rounded-xl px-6 py-6 text-xl  focus:bg-(--white)/20 backdrop-blur-md
                    outline-none focus:ring-2 focus:ring-(--white) focus:border-transparent
                    transition-all duration-300"
            />
        </div>
    )
}