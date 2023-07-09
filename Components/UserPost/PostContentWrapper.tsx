import PostContent from "./PostContent";
import TransNameAction from "./TransNameAction";

export default function PostContentWrapper() {
  return (
    <div className="flex flex-col gap-3">
      <TransNameAction
        actionVerb="placed an"
        date="10h"
        name="Leslie Alexander"
        orderLink="Order"
      />
      <PostContent transName="You have a new order #77842372" />
    </div>
  );
}
