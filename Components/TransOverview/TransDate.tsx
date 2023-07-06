import React from 'react';

const TransDate = ({date} : {date: string}) => {
    return (
        <p className='text-[#86868B] font-medium text-[13px] leading-4 text-right'>
            {date}
        </p>
    );
};

export default TransDate;