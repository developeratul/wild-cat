import UserInfo from "./UserInfo";
import UserPostRoot from "./UserPost";
import { Separator } from "./ui/separator";

export default function ContentPanel() {
  return (
    <div className="h-screen overflow-hidden hover:overflow-y-auto w-full flex justify-center items-center pt-[58px]">
      <div className="flex flex-col w-full gap-5 h-full max-w-[937px]">
        <UserInfo
          avatar=""
          description="All your interactions and the actions from Leslie Alexander will be visible here. You can also tag your team, add comments and more."
          name="Leslie Alexander"
        />
        <Separator />
        <UserPostRoot />
      </div>
    </div>
  );
}
