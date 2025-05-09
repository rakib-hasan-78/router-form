import React from 'react';
import ElderFamily from './../../cousins/ElderFamily/ElderFamily';


const Elder = ({roo}) => {
    return (
        <div className='border-2 p-5 rounded-2xl'>
            <h1>i am elder</h1>
            <p>{roo}</p>
            <ElderFamily roo={roo} />
        </div>
    );
};

export default Elder;