type TextProps = {
    type: 'text' | 'email' | 'tel' | 'password'
    id: string,
    name: string,
    defaultValue?: string,
    isRequired?: boolean,
    placeholder: string,
}

export default function Text({type, id, name, defaultValue="", isRequired=false, placeholder}:TextProps) {
    return(
        <div className="">
            <input
                type={type}
                id={id}
                name={name}
                defaultValue={defaultValue}
                required={isRequired}
                placeholder={placeholder}
                className="w-full bg-(--disabled)/20 text-(--dark)
                    placeholder:text-(--dark)/60 
                    rounded-xl px-4 py-2 text-lg focus:bg-(--dark)/20 backdrop-blur-md
                    outline-none focus:ring-2 focus:ring-(--dark) focus:border-transparent
                    transition-all duration-300"
            />
        </div>
    )
}