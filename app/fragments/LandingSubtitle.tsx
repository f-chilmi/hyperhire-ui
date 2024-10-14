'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTransitionDelay } from '../hooks';

const LandingSubtitle = () => {
  const isVisible = useTransitionDelay(500);

  return (
    <div className={twMerge('', isVisible ? 'opacity-100 animate-fadeInUp ' : 'opacity-0')}>
      <p className="font-[900] text-[18px] sm:text-[24px] text-white ">
        법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
      </p>
      <a href="" className="font-[900] text-[18px] text-underline hidden sm:block text-white">
        개발자가 필요하신가요?
      </a>
    </div>
  );
};

export default LandingSubtitle;
