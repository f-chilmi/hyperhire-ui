'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ProfileSwiper, ProfileCard } from '../components/organisms';
import { useTransitionDelay } from '../hooks';
import { Bubble } from '../components/atoms';
import { UserSimple } from '../components/organisms/ProfileCard';

const LandingRightSection = ({ data, url }: { data: UserSimple[]; url: string }) => {
  const isVisible = useTransitionDelay(1000);
  console.log(277777, url);
  return (
    <div className={twMerge('', isVisible ? 'opacity-100 animate-fadeIn ' : 'opacity-0')}>
      <div className="w-full flex justify-center mb-10">
        <Bubble className="bg-white text-[#00C696]" background="bg-white" arrowPosition="center">
          <div className="flex justify-center items-center font-[900] gap-2">
            <div className="rounded-full bg-[#BBF3D2] w-[26px] h-[26px] text-center">$</div>
            <p className="text-[18px]">월 100만원</p>
          </div>
        </Bubble>
      </div>
      <ProfileSwiper
        items={data.map((d: UserSimple, index: number) => (
          <ProfileCard key={index} data={d} />
        ))}
      />
    </div>
  );
};

export default LandingRightSection;
