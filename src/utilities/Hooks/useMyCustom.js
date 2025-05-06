import { useEffect, useRef, useState } from "react";

const useMyCustom = (defaultValues={name:'', email:'', password:''})=>{
    const [data, setData] = useState(defaultValues);
    const nameFocus = useRef()
    useEffect(()=>{
        if (nameFocus.current) {
            nameFocus.current.focus();
        }
    },[])
    const setDataHandler = e=>{

        const {name, value} = e.target;
        setData(prev=>({
            ...prev,
            [name]:value,
        }))
    }
    return [ data , setDataHandler, nameFocus, setData]
}
export default useMyCustom;