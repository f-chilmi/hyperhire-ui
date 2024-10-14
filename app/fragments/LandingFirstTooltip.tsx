'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTransitionDelay } from '../hooks';
import { Bubble } from '../components/atoms';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const LandingFirstTooltip = () => {
  const isVisible = useTransitionDelay(1000);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className="flex">
      <Bubble
        className={twMerge(
          'bg-[#8BC4FF] text-white sm:bg-white sm:text-[#40E2E8] font-[900]',
          isVisible ? 'opacity-100 animate-fadeIn-300 ' : 'opacity-0',
        )}
        background={sm ? 'bg-white' : 'bg-[#8BC4FF]'}
        arrowPosition="left">
        <p className="text-[18px]"> 풀타임, 파트타임</p>
      </Bubble>
    </div>
  );
};

export default LandingFirstTooltip;
