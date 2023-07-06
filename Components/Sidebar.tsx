import React from 'react';
import SearchBox from './SearchBox';
import Pagination from './Pagination';
import TransOverviewContainer from './TransOverview/TransOverviewContainer';

const Sidebar = () => {
	return (
		<div className='flex flex-col justify-between w-[354px] h-screen border-r text-[#86868B]'>
			<SearchBox />
			{/* Transactions */}
			<TransOverviewContainer />
			<Pagination />
		</div>
	);
};

export default Sidebar;
