import OrderUrl from "./OrderUrl";
import UrlTitle from "./UrlTitle";

export default function UrlWrapper() {
  return (
    <div className="flex flex-col gap-2">
      <OrderUrl>orderurl.com</OrderUrl>
      <UrlTitle>16 Places to Find Illustrations for Your Projects 📚🎨</UrlTitle>
    </div>
  );
}
