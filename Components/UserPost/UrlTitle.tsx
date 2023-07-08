import React from "react";

export default function UrlTitle(props: { children: React.ReactNode }) {
  const { children } = props;
  return <span className="text-[15px] font-[500] text-[#1D1D1F] h-[150%]">{children}</span>;
}
