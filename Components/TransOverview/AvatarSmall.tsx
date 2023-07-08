import Image from "next/image";

export interface AvatarSmallProps {
  avatar?: string;
  name: string;
  size?: number;
  fontSize?: string;
}

const AvatarSmall = ({ avatar, name, size = 40, fontSize = "0.9375rem" }: AvatarSmallProps) => {
  return (
    <>
      {avatar ? (
        <Image
          className="rounded-full object-cover bg-center"
          src={avatar}
          alt={name}
          width={size}
          height={size}
        />
      ) : (
        <div
          style={{ width: size, height: size, fontSize }}
          className="rounded-full flex items-center justify-center bg-[#60B495] text-white"
        >
          {name[0]}
        </div>
      )}
    </>
  );
};

export default AvatarSmall;
