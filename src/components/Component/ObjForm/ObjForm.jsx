import React, { useState } from 'react';

const ObjForm = ({handler}) => {
    const [formObj, setFormObj] = useState({name : 'james', email: '', password: ''});
    const dataHandler = (prop, value)=>{
        setFormObj(formObj=>({
            ...formObj,
            [prop]:value, 
        }))
    }
    const formHandler =e=>{
        e.preventDefault();
        console.log(formObj);
        handler();
        setFormObj({name : 'james', email: '', password: ''})
    }

    return (
       <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <form onSubmit={formHandler} className='w-full flex flex-col items-center space-y-3 text-white'>
                <input
                value={formObj.name} onChange={(e)=>dataHandler('name', e.target.value)}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="" placeholder='hello' />

                <input
                value={formObj.email} onChange={e=>dataHandler('email', e.target.value)}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="" placeholder='hello' />

                <input
                value={formObj.password} onChange={e=>dataHandler('password', e.target.value)}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="pwd" id="" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value="submit" />
            </form>
       </div> 
    );
};

export default ObjForm;