import React from 'react';
import Elder from './../Children/Elder/Elder';
import Middle from './../Children/Middle/Middle';
import Younger from './../Children/younger/Younger';

const Grand = () => {
    const mainRoot = `i am from root`;
    return (
        <div className='w-full h-auto flex justify-center items-center space-x-3'>
            <Elder roo={mainRoot} />
            <Middle roo={mainRoot} />
            <Younger roo={mainRoot} />
        </div>
    );
};

export default Grand;