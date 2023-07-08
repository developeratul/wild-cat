export function UserPostWrapper(props: { children: React.ReactNode }) {
  const { children } = props;
  return <div className="p-3 rounded-[16px] hover:bg-[#F2F2F2]">{children}</div>;
}
