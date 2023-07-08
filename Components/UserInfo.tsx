import AvatarSmall from "./TransOverview/AvatarSmall";
import SubText from "./TransOverview/SubText";
import TransName from "./TransOverview/TransName";

interface UserInfoProps {
  name: string;
  avatar: string;
  description: string;
}

export default function UserInfo(props: UserInfoProps) {
  const { name, avatar, description } = props;
  return (
    <div className="flex gap-4 items-center">
      <div>
        <AvatarSmall avatar={avatar} name={name} size={96} fontSize="1.4375rem" />
      </div>
      <div className="flex flex-col gap-1">
        <TransName fontSize={23} name={name} />
        <SubText>{description}</SubText>
      </div>
    </div>
  );
}
