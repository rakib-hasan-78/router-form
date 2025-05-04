import React from 'react';
// import BasicCont from '../Component/BasicCont/BasicCont';
import ObjForm from './../Component/ObjForm/ObjForm';

const Contact = () => {
    const submitHandler = () =>{
        // console.log(e);
        console.log('submitted')
    }
    return (
        <section className='w-full h-auto'>
            <main>
                {/* <BasicCont givenHandler={submitHandler} /> */}
            {
                <ObjForm handler={submitHandler} />
            }
            </main>
        </section>
    );
};

export default Contact;