import React from 'react';
import CardType from './CardType';
import TransAmount from './TransAmount';

const CardAmountWrapper = ({
	cardNumber,
	amount,
}: {
	cardNumber: string;
	amount: string;
}) => {
	return (
		<div className='flex items-center gap-[8px]'>
			<CardType cardNumber='5567' />
			<SeparatorDot />
			<TransAmount amount='258.69' />
		</div>
	);
};

export const SeparatorDot = () => {
	return <div className='w-[2px] h-[2px] rounded-full bg-[#494949]'></div>;
};

export default CardAmountWrapper;
