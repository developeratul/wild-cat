import Image from 'next/image';
import React from 'react';
import SearchFilter from './SearchFilter';
import SearchOptions from './SearchOptions';

const SearchBox = () => {
	return (
		<div
			className='bg-[#F2F2F2] flex gap-[10px] items-center w-full'
			style={{ padding: '12px 8px 12px 8px' }}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-[24px] h-[24px]'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
				/>
			</svg>

			<input
				type='text'
				placeholder='Search anything'
				className='bg-transparent outline-none w-full'
			/>

			{/* Filter Button */}
            <SearchFilter />
            <SearchOptions />
		</div>
	);
};

export default SearchBox;
