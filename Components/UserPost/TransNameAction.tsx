import { SeparatorDot } from "../TransOverview/CardAmountWrapper";
import TransDate from "../TransOverview/TransDate";
import TransName from "../TransOverview/TransName";
import ActionVerb from "./ActionVerb";
import OrderLink from "./OrderLink";

export default function TransNameAction() {
  return (
    <div className="flex gap-1 items-center">
      <TransName name="Leslie Alexander" />
      <ActionVerb>placed an</ActionVerb>
      <OrderLink>Order</OrderLink>
      <SeparatorDot />
      <TransDate date="10h" />
    </div>
  );
}
