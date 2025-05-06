import React from 'react';
import useMyCustom from '../../../utilities/Hooks/useMyCustom';

const AnotherCustom = () => {
    const [data, setDataHandler, nameFocus, setData] = useMyCustom({name:'sam', email: 'andruew@and.cu', password:''});
    const formHandler = e=>{
        e.preventDefault();
        console.log(data)
        setData({name:'sam', email: 'andruew@and.cu', password:''})
    }
    return (
         <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <form onSubmit={formHandler} className='w-full flex flex-col items-center space-y-3 text-white'>
                <input
                ref={nameFocus}
                value={data.name} onChange={setDataHandler}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="" placeholder='hello' />

                <input
                value={data.email} onChange={setDataHandler}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="" placeholder='hello' />

                <input
                value={data.password} onChange={setDataHandler}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="password" id="" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AnotherCustom;