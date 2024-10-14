import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = {
  text: 'bg-transparent text-white font-[900]',
  outlined: 'border border-solid bg-white border-primary text-primary font-[900]',
  default: 'bg-white text-[#4A77FF] font-[900]',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  fullWidth?: boolean;
  startIcon?: any;
  endIcon?: any;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  fullWidth = false,
  color = 'primary',
  variant = 'default',
  className = '',
  startIcon = null,
  endIcon = null,
  disabled,
  type = 'button',
  ...props
}: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <button
      {...props}
      type={type}
      className={twMerge(
        'flex flex-row items-center justify-center gap-x-2 text-lg h-fit px-[24px] py-[6px] md:py-[8px] md:px-[22px] rounded-[8px]',
        buttonVariants[variant],
        fullWidth ? 'w-full' : 'w-fit',
        disabled ? 'opacity-50' : 'opacity-100',
        className,
      )}>
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
}
