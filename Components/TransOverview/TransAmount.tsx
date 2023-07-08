import { FontProps } from "@/types";

interface TransAmountProps extends FontProps {
  amount: string;
}

const TransAmount = ({ amount, fontSize = 13, fontWeight = 500 }: TransAmountProps) => {
  return (
    <p className="text-[#494949] leading-4 text-right" style={{ fontSize, fontWeight }}>
      ${amount}
    </p>
  );
};

export default TransAmount;
