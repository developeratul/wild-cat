import React from "react";

interface SubTextProps {
  fontSize?: number;
  color?: string;
  children: React.ReactNode;
}

export default function SubText(props: SubTextProps) {
  const { fontSize = 15, color = "#86868B", children } = props;
  return (
    <p className="font-[400] h-[150%]" style={{ fontSize, color }}>
      {children}
    </p>
  );
}
