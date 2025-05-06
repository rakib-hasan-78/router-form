import { useEffect } from "react";
import { useRef, useState } from "react";

const useReuseHook = 
(useDefaults ={name:'', email:'', password:''})=>{

    const [data, setData] = useState(useDefaults);
    const nameFocus = useRef();
    // ** for focus textField==>
    useEffect(()=>{
        nameFocus.current.focus();
    }, [])

    const setDataHandler=(e)=>{
        const{name, value} = e.target;
        setData(prev=>({
            ...prev,
            [name] : value,
        }))
    }

    return [data, setData, nameFocus, setDataHandler];
}
export default useReuseHook;