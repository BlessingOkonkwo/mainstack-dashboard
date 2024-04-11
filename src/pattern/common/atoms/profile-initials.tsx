import React from "react";

interface IInitialsProps {
  name: string | undefined;
}
const ProfileInitials = ({ name }: IInitialsProps) => {
  const abbNames = name?.replace(/(\w)\w*\W*/g, (_, i) => i.toUpperCase());

  return (
    <div className="flex flex-col items-center justify-center w-[32px] h-[32px] text-sm font-semibold rounded-full text-white bg-gradient-to-br from-[#5C6670] to-[#131316] capitalize">
      {abbNames}
    </div>
  );
};

export default ProfileInitials;
