import React from "react";

export default function OrderUrl(props: { children: React.ReactNode }) {
  const { children } = props;
  return <span className="text-[13px] font-[400] text-[#86868B] h-4">{children}</span>;
}
