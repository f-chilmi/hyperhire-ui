'use client';
import { twMerge } from 'tailwind-merge';
import { useTransitionDelay } from '../hooks';

const LandingTitle = () => {
  const isVisible = useTransitionDelay(0);
  return (
    <p
      className={twMerge(
        'font-[900] text-[36px] sm:text-[48px] text-white ',
        isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0',
      )}>
      최고의 실력을 가진 외국인 인재를 찾고 계신가요?
    </p>
  );
};

export default LandingTitle;
