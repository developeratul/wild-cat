import UserPost from "./UserPost";
import { UserPostWrapper } from "./UserPostWrapper";

export default function UserPostRoot() {
  return (
    <UserPostWrapper>
      <UserPost />
    </UserPostWrapper>
  );
}
