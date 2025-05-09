import React from 'react';
import YoungFam from './../../cousins/YounFam/YoungFam';

const Younger = ({roo}) => {
    return (
        <div className='border-2 p-5 rounded-2xl'>
            <h1>i am the younger</h1>
            <p>{roo}</p>
            <YoungFam roo={roo} />
        </div>
    );
};

export default Younger;