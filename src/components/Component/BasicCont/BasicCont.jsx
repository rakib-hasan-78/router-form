import React, { useState } from 'react';

const BasicCont = ({givenHandler}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        givenHandler();
        console.log(name);
        console.log(email);
        console.log(pwd);
    }
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <form onSubmit={submitHandler} className='w-full flex flex-col items-center space-y-3 text-white'>
                <input
                value={name} onChange={(e)=>setName(e.target.value)}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="" placeholder='hello' />

                <input
                value={email} onChange={e=>setEmail(e.target.value)}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="" placeholder='hello' />

                <input
                value={pwd} onChange={e=>setPwd(e.target.value)}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="pwd" id="" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default BasicCont;