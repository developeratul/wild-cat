import { FontProps } from "@/types";
import Image from "next/image";

interface CardTypeProps extends FontProps {
  cardNumber: string;
}

const CardType = ({ cardNumber, fontSize = 13, fontWeight = 500 }: CardTypeProps) => {
  return (
    <div className="flex gap-[4px]">
      <Image src="/icons/visa.svg" alt="Card" width={24} height={24} />
      <span className="text-[#494949]" style={{ fontSize, fontWeight }}>
        {cardNumber}
      </span>
    </div>
  );
};

export default CardType;
