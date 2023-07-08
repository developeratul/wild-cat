import AvatarSmall from "../TransOverview/AvatarSmall";
import PostContentWrapper from "./PostContentWrapper";

export default function UserPost() {
  return (
    <div className="flex gap-3">
      <AvatarSmall name="Leslie Alexander" />
      <PostContentWrapper />
    </div>
  );
}
