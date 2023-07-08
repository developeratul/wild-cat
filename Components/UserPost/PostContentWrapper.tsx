import PostContent from "./PostContent";
import TransNameAction from "./TransNameAction";

export default function PostContentWrapper() {
  return (
    <div className="flex flex-col gap-3">
      <TransNameAction />
      <PostContent />
    </div>
  );
}
