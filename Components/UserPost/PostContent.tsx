import CardAmountWrapper from "../TransOverview/CardAmountWrapper";
import TransName from "../TransOverview/TransName";
import OrderUrlContainer from "./OrderUrlContainer";

export default function PostContent() {
  return (
    <div className="flex flex-col gap-[6px]">
      <TransName name="You have a new order #77842372" fontSize={17} />
      <p className="text-[15px] font-[400] h-[20px] text-[#1D1D1F]">Order placed on 04/01/2022</p>
      <CardAmountWrapper amount="$258.69" cardNumber="5567" fontSize={15} fontWeight={500} />
      <OrderUrlContainer />
    </div>
  );
}
