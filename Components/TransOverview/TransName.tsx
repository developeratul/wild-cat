const TransName = ({ name, fontSize = 15 }: { name: string; fontSize?: number }) => {
  return (
    <h4 style={{ fontSize }} className="text-[#1D1D1F] font-semibold leading-6 h-[22px]">
      {name}
    </h4>
  );
};

export default TransName;
