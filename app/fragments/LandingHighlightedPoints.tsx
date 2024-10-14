'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTransitionDelay } from '../hooks';

const LandingHighlightedPoints = () => {
  const isVisible = useTransitionDelay(1000);
  return (
    <div
      className={twMerge(
        ' gap-x-10 hidden sm:flex text-white',
        isVisible ? 'opacity-100 animate-fadeIn ' : 'opacity-0',
      )}>
      <div className="border-t-[1px] border-white animate-fadeIn">
        <p className="text-[18px] font-[900]">평균 월 120만원</p>
        <p className="text-[16px] font-[900] text-white/0.8">임금을 해당 국가를 기준으로 계산합니다.</p>
      </div>
      <div className="border-t-[1px] border-white animate-fadeIn">
        <p className="text-[18px] font-[900]">최대 3회 인력교체</p>
        <p className="text-[16px] font-[900] text-white/0.8">막상 채용해보니 맞지 않아도 걱정하지 마세요.</p>
      </div>
      <div className="border-t-[1px] border-white animate-fadeIn">
        <p className="text-[18px] font-[900]">평균 3일, 최대 10일</p>
        <p className="text-[16px] font-[900] text-white/0.8">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
      </div>
    </div>
  );
};

export default LandingHighlightedPoints;
