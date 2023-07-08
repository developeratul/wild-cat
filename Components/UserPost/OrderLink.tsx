import React from "react";

export default function OrderLink(props: { children: React.ReactNode }) {
  const { children } = props;
  return <span className="text-[15px] font-[600] text-[#1D1D1F] h-5">{children}</span>;
}
