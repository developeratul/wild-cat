import CardAmountWrapper from "../TransOverview/CardAmountWrapper";
import TransName from "../TransOverview/TransName";
import OrderUrlContainer from "./OrderUrlContainer";

export default function PostContent(props: {
  url?: boolean;
  transName: string;
  secondaryText?: boolean;
  disputeDetails?: React.ReactNode;
}) {
  const { url = true, disputeDetails, transName, secondaryText = true } = props;
  return (
    <div className="flex flex-col gap-[6px]">
      <TransName name={transName} fontSize={17} />
      {secondaryText && (
        <p className="text-[15px] font-[400] h-[20px] text-[#1D1D1F]">Order placed on 04/01/2022</p>
      )}
      {disputeDetails}
      <CardAmountWrapper amount="258.69" cardNumber="5567" fontSize={15} fontWeight={500} />
      {url && <OrderUrlContainer />}
    </div>
  );
}
