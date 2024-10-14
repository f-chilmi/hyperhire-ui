import React from 'react';

function Chip({ text }: { text: string }) {
  return <div className="rounded-[6px] py-[4px] px-[12px] border border-[#C1C5CF] text-[#5E626F]">{text}</div>;
}

export default Chip;
