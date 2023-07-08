import React from "react";

export default function ActionVerb(props: { children: React.ReactNode }) {
  const { children } = props;
  return <span className="text-[15px] font-[500] text-[#86868B] h-5">{children}</span>;
}
