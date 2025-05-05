import React, { useRef } from 'react';

const FormRef = ({hand}) => {
    let name , email, password = useRef();

    const formHandler = (e)=>{
        e.preventDefault();
        const data = {

             Name : name.value,
             email: email.value,
             password: password.value
        }
        console.log(data);
        hand();
    }
    return (
       <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <form onSubmit={formHandler} className='w-full flex flex-col items-center space-y-3 text-white'>
                <input
                ref={(a)=> name = a}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="name" placeholder='hello' />

                <input
                ref={(a)=> email = a}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="email" placeholder='hello' />

                <input
                ref={(a)=> password = a}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="pwd" id="password" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value="submit" />
            </form>
       </div>  
    );
};

export default FormRef;