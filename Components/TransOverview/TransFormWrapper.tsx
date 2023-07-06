import React from 'react';
import NameReasonWrapper from './NameReasonWrapper';
import CardAmountWrapper from './CardAmountWrapper';

export interface TransFormWrapperProps {
    name: string;
    date: string;
    reason: string;
    amount: string;
    cardNumber : string;
}

const TransFormWrapper : React.FC<TransFormWrapperProps> = ({
    name,
    date,
    reason,
    amount,
    cardNumber
}) => {
    return (
        <div className='flex flex-col gap-[12px] w-full'>
            <NameReasonWrapper name={name} date={date} reason={reason} />
            <CardAmountWrapper amount={amount} cardNumber={cardNumber} />
        </div>
    );
};

export default TransFormWrapper;