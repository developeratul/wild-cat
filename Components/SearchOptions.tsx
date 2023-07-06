import Image from 'next/image';
import React from 'react';

const SearchOptions = () => {
	return (
		<button>
			<Image
				src='/icons/bi_three-dots.svg'
				alt='Filter'
				width={24}
				height={24}
			/>
		</button>
	);
};

export default SearchOptions;
