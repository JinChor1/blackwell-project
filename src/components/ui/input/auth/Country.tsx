type CountryProps = {
    id: string,
    name: string,
    defaultValue?: string,
    isRequired?: boolean,
}

export default function Country({id, name, defaultValue="", isRequired=false}:CountryProps) {
    return(
        <select
            name={name}
            id={id}
            required={isRequired}
            defaultValue={defaultValue}
            className="w-full bg-(--disabled)/20 text-(--dark)
                    placeholder:text-(--dark)/60 
                    rounded-xl px-4 py-2 text-lg focus:bg-(--dark)/20 backdrop-blur-md
                    outline-none focus:ring-2 focus:ring-(--dark) focus:border-transparent
                    transition-all duration-300"
        >
            <option value="" className="text-(--disabled)" disabled>Country</option>
            <option value="malaysia" className="text-(--dark)">Malaysia</option>
            <option value="vietnam" className="text-(--dark)">Vietnam</option>
            <option value="thailand" className="text-(--dark)">Thailand</option>
            <option value="others" className="text-(--dark)">Others</option>
        </select>

    )
}