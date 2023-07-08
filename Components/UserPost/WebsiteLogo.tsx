import Image, { StaticImageData } from "next/image";

interface WebsiteLogoProps {
  src: string | StaticImageData;
  alt: string;
}

export default function WebsiteLogo(props: WebsiteLogoProps) {
  const { src, alt } = props;
  return (
    <Image
      src={src}
      alt={alt}
      width={72}
      height={72}
      className="rounded-[12px] object-cover bg-center"
    />
  );
}
