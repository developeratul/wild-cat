import React from 'react';
import AvatarTransWrapper, {
	AvatarTransWrapperProps,
} from './AvatarTransWrapper';

const TransOverview: React.FC<AvatarTransWrapperProps> = ({
    name,
    date,
    reason,
    amount,
    cardNumber,
    avatar,
}) => {
	return (
		<div className='hover:bg-[#f2f2f2] bg-white p-[8px]'>
            <AvatarTransWrapper
                name={name}
                date={date}
                reason={reason}
                amount={amount}
                cardNumber={cardNumber}
                avatar={avatar}
            />
		</div>
	);
};

export default TransOverview;
