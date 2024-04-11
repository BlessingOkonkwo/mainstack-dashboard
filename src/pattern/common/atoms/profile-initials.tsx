import React from "react";

interface IInitialsProps {
  initials: string;
}
const ProfileInitials = ({ initials }: IInitialsProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-[32px] h-[32px] text-sm font-semibold rounded-full text-white bg-gradient-to-br from-[#5C6670] to-[#131316] capitalize">
      {initials}
    </div>
  );
};

export default ProfileInitials;
