import React, { useEffect } from 'react';
import { useRef } from 'react';

const FocusRef = ({ submit}) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const pwdRef = useRef();
    useEffect( ()=>{
        nameRef.current.focus();
    },[])

    const submitHandler = e=>{

        e.preventDefault();
        submit();
        const obj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: pwdRef.current.value
        }
         console.log(obj)
    }
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <form onSubmit={submitHandler} className='w-full flex flex-col items-center space-y-3 text-white'>
                <input
                ref={nameRef}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="ename" placeholder='hello' defaultValue={'james worington'} />

                <input
                ref={emailRef}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="email" placeholder='hello' />

                <input
                ref={pwdRef}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="pwd" id="pwd" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value="submit" autoComplete='pwd' />
            </form>
        </div>
    );
};

export default FocusRef;