import React from 'react';
import { twMerge } from 'tailwind-merge';

function BorderedIcon({ icon, className }: { icon: JSX.Element; className?: string }) {
  return <div className={twMerge('rounded-[8px] p-[12px] w-min', className)}>{icon}</div>;
}

export default BorderedIcon;
