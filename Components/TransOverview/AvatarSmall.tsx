import React from 'react';

const AvatarSmall = ({ avatar, name }: { avatar?: string; name: string }) => {
	return (
		<>
			{avatar ? (
				<div
					className='w-[40px] h-[40px] bg-cover bg-center rounded-full'
					style={{
						backgroundImage: `url(${avatar})`,
					}}
				/>
			) : (
				<div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#60B495] text-white'>
					{name[0]}
				</div>
			)}
		</>
	);
};

export default AvatarSmall;
