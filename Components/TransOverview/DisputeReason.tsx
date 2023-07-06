import React from 'react';

const DisputeReason = ({reason}: {reason : string}) => {
    return (
        <p className='text-[#86868B] font-medium text-[13px] leading-5'>
            {reason}
        </p>
    );
};

export default DisputeReason;