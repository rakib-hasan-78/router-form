import React from 'react';
import ReusableForm from '../Component/ReusableForm/ReusableForm';
//import AnotherCustom from '../Component/AnotherCustom/AnotherCustom';
//import CustomHook from '../Component/CustomHook/CustomHook';
// import FocusRef from '../Component/FocusRef/FocusRef';
// import BasicCont from '../Component/BasicCont/BasicCont';
// import ObjForm from './../Component/ObjForm/ObjForm';
//import FormRef from './../Component/FormRef/FormRef';



const Contact = () => {
    const submitHandler = (data) =>{
        console.log('registered data:')
        console.log(data);
    }
    const updateHandler = (data) =>{
        console.log('updated data:')
        console.log(data);
    }
    
    return (
        <section className='w-full min-h-screen flex items-center justify-center xxs:flex-col lg:flex-row'>
            <main className='flex items-center justify-center space-x-5'>
            {
                //* <BasicCont givenHandler={submitHandler} /> 
                // ** <ObjForm handler={submitHandler} />
                //**<FormRef hand ={submitHandler} />
                //**<FocusRef submit={submitHandler} />
               //** */ <CustomHook hand={submitHandler} />
               //**<AnotherCustom submit={submitHandler} />
               <ReusableForm operationHandler={submitHandler} btnName={'Submit'}>
                <div className='w-full flex flex-col items-center justify-center space-y-3 mb-5'>
                    <h1 className='text-5xl'>registration</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
               </ReusableForm>
            }
            {
                <ReusableForm operationHandler={updateHandler} btnName={'Update'}>
                <div className='w-full flex flex-col items-center justify-center space-y-3 mb-5'>
                    <h1 className='text-5xl'>update</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
               </ReusableForm>
            }
            </main>
        </section>
    );
};

export default Contact;