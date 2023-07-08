const TransLoading = () => {
  return Array(20)
    .fill(0)
    .map((_, index) => <SingleItemLoading key={index} />);
};

const SingleItemLoading = () => {
  return (
    <div className="hover:bg-[#f2f2f2] bg-white p-[8px]">
      <div className="flex gap-[12px]">
        <div className="min-w-max">
          <div className="w-[40px] h-[40px] bg-gray-300 rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex flex-col gap-[6px] w-full">
            <div className="flex items-center justify-between">
              <h4 className="w-[120px] h-[14px] bg-gray-300 animate-pulse"></h4>
              <p className="w-[80px] h-[14px] bg-gray-300 animate-pulse"></p>
            </div>
            <p className="w-[180px] h-[14px] bg-gray-300 animate-pulse"></p>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[35px] h-[14px] bg-gray-300 rounded animate-pulse"></div>
            <div className="w-[2px] h-[2px] rounded-full bg-gray-300 animate-pulse"></div>
            <p className="w-[50px] h-[14px] bg-gray-300 rounded animate-pulse"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransLoading;
