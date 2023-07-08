import WebSiteLogoSrc from "@/assets/website-logo.jpg";
import UrlWrapper from "./UrlWrapper";
import WebsiteLogo from "./WebsiteLogo";

export default function OrderUrlWrapper() {
  return (
    <div className="flex gap-3">
      <WebsiteLogo src={WebSiteLogoSrc} alt="Website logo" />
      <UrlWrapper />
    </div>
  );
}
