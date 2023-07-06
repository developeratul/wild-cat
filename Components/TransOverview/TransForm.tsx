import React from 'react';
import TransName from './TransName';
import TransDate from './TransDate';

const TransForm = ({name, date} : {name: string, date: string}) => {
    return (
        <div className='flex items-center justify-between'>
            <TransName name={name} />
            <TransDate date={date} />
        </div>
    );
};

export default TransForm;