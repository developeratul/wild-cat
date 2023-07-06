import React from 'react';
import AvatarSmall from './AvatarSmall';
import TransFormWrapper from './TransFormWrapper';

export interface AvatarTransWrapperProps {
	name: string;
	date: string;
	reason: string;
	amount: string;
	cardNumber: string;
	avatar?: string;
}

const AvatarTransWrapper: React.FC<AvatarTransWrapperProps> = ({
	name,
	date,
	reason,
	amount,
	cardNumber,
	avatar,
}) => {
	return (
		<div className='flex gap-[12px]'>
			<div className='min-w-max'>
				<AvatarSmall name={name} avatar={avatar} />
			</div>
			<TransFormWrapper
				name={name}
				date={date}
				reason={reason}
				amount={amount}
				cardNumber={cardNumber}
			/>
		</div>
	);
};

export default AvatarTransWrapper;
