import Image from "next/image";
import Link from "next/link";
import AppIcon from "./AppIcon";
import LogoutButton from "./LogoutButton";

const AppBar = () => {
  return (
    <div className="min-w-[64px] h-screen flex flex-col justify-between items-center bg-[#F1F2F2] py-[8px] px-[10px] gap-[8px]">
      <div className="flex flex-col gap-[8px]">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={44} height={44} />
        <Link href="/">
          <Image src="/app-logo.png" alt="Logo" width={44} height={44} />
        </Link>

        {/* Separator */}
        <hr className="w-[44px] border-[#00000014] border-t-2" />
      </div>
      {/* App Lists */}
      <div className="h-full overflow-x-hidden hide-scrollbar flex flex-col gap-[8px]">
        <AppIcon notificationCount={5} appName="A" />
        <AppIcon notificationCount={9} appName="B" />
        <AppIcon notificationCount={1200} appName="C" />
      </div>
      <div className="h-[64px]">
        <LogoutButton />
      </div>
    </div>
  );
};

export default AppBar;
