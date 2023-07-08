import Image from "next/image";

const AvatarSmall = ({ avatar, name }: { avatar?: string; name: string }) => {
  return (
    <>
      {avatar ? (
        <Image
          className="rounded-full object-cover bg-center"
          src={avatar}
          alt={name}
          width={40}
          height={40}
        />
      ) : (
        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#60B495] text-white">
          {name[0]}
        </div>
      )}
    </>
  );
};

export default AvatarSmall;
