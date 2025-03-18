type TextAreaProps = {
    id: string,
    name: string,
    isRequired?: boolean,
    placeholder: string,
}

export default function TextArea({id, name, isRequired=false,placeholder}:TextAreaProps) {
    return(
        <div className="">
            <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                required={isRequired}
                rows={8}
                className="w-full bg-transparent text-(--white)
                    placeholder:text-(--white)/60 border-2 border-(--white)/60
                    rounded-xl px-6 py-6 text-xl  focus:bg-(--white)/20 backdrop-blur-md
                    outline-none focus:ring-2 focus:ring-(--white) focus:border-transparent"
                    // NOTES: no transition due to causing lag when resize
            />
        </div>
    )
}