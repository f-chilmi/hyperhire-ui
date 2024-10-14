import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface BubbleProps {
  className: string;
  background: string; // "bg-white / bg-[#xxxxx]"
  arrowPosition: string; // left || center || right
}

function Bubble({ className, background, arrowPosition, children }: PropsWithChildren<BubbleProps>) {
  return (
    <div className={twMerge('relative px-[24px] py-[6px] rounded-[8px]', className)}>
      {children}
      <div
        className={twMerge(
          'absolute bottom-[6px] transform ',
          arrowPosition === 'center' && 'translate-y-full left-1/2 -translate-x-1/2',
          arrowPosition === 'left' && 'translate-y-full left-[15%] -translate-x-1/2',
          arrowPosition === 'right' && 'translate-y-full left-[85%] -translate-x-1/2',
        )}>
        <div className={twMerge('w-3 h-3 transform rotate-45', background)}></div>
      </div>
    </div>
  );
}

export default Bubble;
