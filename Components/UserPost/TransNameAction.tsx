import { SeparatorDot } from "../TransOverview/CardAmountWrapper";
import TransDate from "../TransOverview/TransDate";
import TransName from "../TransOverview/TransName";
import ActionVerb from "./ActionVerb";
import OrderLink from "./OrderLink";

export default function TransNameAction(props: {
  actionVerb: string;
  orderLink: string;
  date: string;
  name: string;
}) {
  const { actionVerb, date, name, orderLink } = props;
  return (
    <div className="flex gap-1 items-center">
      <TransName name={name} />
      <ActionVerb>{actionVerb}</ActionVerb>
      <OrderLink>{orderLink}</OrderLink>
      <SeparatorDot />
      <TransDate date={date} />
    </div>
  );
}
