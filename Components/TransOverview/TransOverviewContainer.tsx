import TransOverviewLists from "./TransOverviewLists";

const TransOverviewContainer = () => {
  return (
    <div className="p-[8px] h-full overflow-hidden hover:overflow-y-scroll">
      <TransOverviewLists />
    </div>
  );
};

export default TransOverviewContainer;
