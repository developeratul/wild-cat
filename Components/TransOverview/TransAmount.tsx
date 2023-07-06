import React from 'react';

const TransAmount = ({amount} : {amount : string}) => {
	return (
		<p className='text-[#494949] font-medium text-[13px] leading-4 text-right'>
			${amount}
		</p>
	);
};

export default TransAmount;
