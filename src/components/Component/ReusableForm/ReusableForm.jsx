import React from 'react';
import useReuseHook from '../../../utilities/Hooks/useReusedata';

const ReusableForm = ({operationHandler , children, btnName='Submit'}) => {
    const [data, setData, nameFocus, setDataHandler] = useReuseHook({name:'', email:'', password:''});
    const localOperationHandler = e=>{
        e.preventDefault();
        operationHandler(data)
        setData({name:'', email:'', password:''})
    }

    return (
        <div className='w-full min-h-auto flex flex-col items-center justify-center'>
            {children}
            <form onSubmit={localOperationHandler}  className='w-full flex flex-col items-center space-y-3 text-white'>
                <input ref={nameFocus}
                 value={data.name} onChange={setDataHandler}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="text" name="name" id="" placeholder='hello' />

                <input
                value={data.email} onChange={setDataHandler}
                 className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="email" name="email" id="" placeholder='hello' />

                <input
                value={data.password} onChange={setDataHandler}
                className='w-full py-2.5 outline-0 bg-amber-500 rounded-2xl px-3.5 ' type="password" name="password" id="" placeholder='hello' />

                <input
                className='bg-green-600 py-2.5 min-w-full rounded-xl text-lg uppercase cursor-pointer' type="submit" value={btnName} />
            </form>
        </div>
    );
};

export default ReusableForm;