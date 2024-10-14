import Avatar from '@mui/material/Avatar';
import React from 'react';
import Image from 'next/image';

function AvatarWithFlag({ src, countryCode }: { src: string; countryCode: string }) {
  return (
    <div className="relative w-[120px] h-[120px]">
      <Avatar alt="Profile 1" src={src} sx={{ width: 120, height: 120 }} />
      <Image
        alt="Germany"
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`}
        width={25}
        height={18}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}

export default AvatarWithFlag;
