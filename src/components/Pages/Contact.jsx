import React from 'react';
import FocusRef from '../Component/FocusRef/FocusRef';
// import BasicCont from '../Component/BasicCont/BasicCont';
// import ObjForm from './../Component/ObjForm/ObjForm';
//import FormRef from './../Component/FormRef/FormRef';

const Contact = () => {
    const submitHandler = () =>{
        // console.log(e);
        console.log('submitted')
    }
    return (
        <section className='w-full h-auto'>
            <main>
            {
                //* <BasicCont givenHandler={submitHandler} /> 
                // ** <ObjForm handler={submitHandler} />
                //**<FormRef hand ={submitHandler} />
                <FocusRef submit={submitHandler} />
            }
            </main>
        </section>
    );
};

export default Contact;