type CountryProps = {
    isRequired?: boolean,
}

export default function Country({isRequired=false}:CountryProps) {
    return(
        <select
            name="country" 
            id="country" 
            required={isRequired}
            defaultValue={""}
            className="w-full bg-transparent text-(--white)
                placeholder:text-(--white)/60 border-2 border-(--white)/60
                rounded-xl px-6 py-6 text-xl  focus:bg-(--white)/20 backdrop-blur-md
                outline-none focus:ring-2 focus:ring-(--white) focus:border-transparent
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