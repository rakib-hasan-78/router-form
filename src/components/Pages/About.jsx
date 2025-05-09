import React from 'react';
import Grand from './../Component/Parent/GrandParent/Grand';


const About = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <h2 className='xxs:text-lg sm:text-xl lg:text-5xl font-semibold italic uppercase'>i am about page but empty one !</h2>
            <div className='w-full h-auto bg-green-300 p-5'>
                <Grand />
            </div>
        </div>
    );
};

export default About;