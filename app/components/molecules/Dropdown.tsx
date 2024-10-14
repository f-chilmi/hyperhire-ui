'use client';
import { Menu, MenuItem, Divider } from '@mui/material';
import React, { useState, MouseEvent } from 'react';
import { Button } from '../atoms';
import { CaretDown } from '../atoms/icons';
import { twMerge } from 'tailwind-merge';

export type OptionType = {
  label: string;
  action: () => void;
};

function Dropdown({
  buttonText,
  options,
  className,
  classNameOption,
}: {
  buttonText: string;
  options: OptionType[];
  className?: string;
  classNameOption?: string;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        className={className}
        id="popover-button"
        variant="text"
        onClick={handleClick}
        endIcon={<CaretDown fill="text-white" />}>
        {buttonText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="shadow-xs"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <p className={twMerge('px-4 py-1 text-lg font-[700]', classNameOption)}>{buttonText}</p>
        {options.map((option, index) => {
          if (option.label === 'divider') return <Divider key={index} />;
          return (
            <MenuItem className={classNameOption} key={index} onClick={option.action}>
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default Dropdown;
