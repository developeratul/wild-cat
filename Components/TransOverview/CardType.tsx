import Image from 'next/image';
import React from 'react';

const CardType = ({ cardNumber }: { cardNumber: string }) => {
	return (
		<div className='flex gap-[4px]'>
            <Image src='/icons/visa.svg' alt='Card' width={24} height={24} />
            <span className='text-[#494949] font-medium text-[13px]'>
                {cardNumber}
            </span>
		</div>
	);
};

export default CardType;
