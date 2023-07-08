import { FontProps } from "@/types";
import CardType from "./CardType";
import TransAmount from "./TransAmount";

interface CardAmountWrapperProps extends FontProps {
  cardNumber: string;
  amount: string;
}

const CardAmountWrapper = ({ cardNumber, amount }: CardAmountWrapperProps) => {
  return (
    <div className="flex items-center gap-[8px]">
      <CardType cardNumber={cardNumber} />
      <SeparatorDot />
      <TransAmount amount={amount} />
    </div>
  );
};

export const SeparatorDot = () => {
  return <div className="w-[2px] h-[2px] rounded-full bg-[#494949]"></div>;
};

export default CardAmountWrapper;
