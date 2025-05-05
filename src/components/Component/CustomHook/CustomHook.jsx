import React from 'react';
import useCustomHook from '../../../utilities/Hooks/customHook';

const CustomHook = ({hand}) => {
const [values, valueHandler] = useCustomHook({name:'', email:'', password:''});
    const formHandler=e=>{
        e.preventDefault();
        hand();
        console.log(values);
        
    }
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <form onSubmit={formHandler} className='w-full flex flex-col items-center space-y-3 text-white'>
                <input 
                value={values.name} onChange={valueHandler}           
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="" placeholder='hello' />

                <input
                value={values.email} onChange={valueHandler}           
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="" placeholder='hello' />

                <input
                value={values.password} onChange={valueHandler}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="password" id="" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default CustomHook;