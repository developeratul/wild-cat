import React from 'react';

const TransName = ({name} : {name: string}) => {
    return (
        <h4 className='text-[#1D1D1F] font-semibold text-[15px] leading-6'>
            {name}
        </h4>
    );
};

export default TransName;