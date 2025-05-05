import { useState } from "react"

const useCustomHook = (defaultValues={ name:'', email:'', password:'' }) => {
    const [values, setValues] = useState(defaultValues)
    const valueHandler = e =>{
        const {name, value} = e.target;
        setValues(prev=>({
            ...prev,
            [name]:value,
        }));
    }

    return[values, valueHandler];

}

export default useCustomHook;
