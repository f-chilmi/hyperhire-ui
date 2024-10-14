import React from 'react';

function SmallCard({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="rounded-[12px] p-[16px] bg-white/20 flex items-center gap-x-[24px] h-[88px] w-[322px]">
      {icon}
      <p className="font-[900] text-[24px] text-white">{text}</p>
    </div>
  );
}

export default SmallCard;
