import React from 'react';
import TransForm from './TransForm';
import DisputeReason from './DisputeReason';

interface NameReasonWrapperProps {
    name: string;
    date: string;
    reason: string;
}

const NameReasonWrapper : React.FC<NameReasonWrapperProps> = ({name, date, reason}) => {
    return (
        <div className='flex flex-col gap-[6px] w-full'>
            <TransForm name={name} date={date} />
            <DisputeReason reason={reason} />
        </div>
    );
};

export default NameReasonWrapper;