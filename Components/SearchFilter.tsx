import Image from 'next/image';
import React from 'react';

const SearchFilter = () => {
	return (
		<>
			<button>
				<Image
					src='/icons/fluent_filter.svg'
					alt='Filter'
					width={24}
					height={24}
				/>
			</button>
		</>
	);
};

export default SearchFilter;
