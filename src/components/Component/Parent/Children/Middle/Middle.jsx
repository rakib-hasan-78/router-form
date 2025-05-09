import React from 'react';
import MidFamily from './../../cousins/MidFamily/MidFamily';

const Middle = ({roo}) => {
    return (
        <div className='border-2 p-5 rounded-2xl'>
            <h1>its middle baby </h1>
            <p>{roo}</p>
            <MidFamily roo={roo}/>
        </div>
    );
};

export default Middle;