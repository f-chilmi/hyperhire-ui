'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconMarketing, IconImage, IconBox, IconTarget, IconCall } from '../components/atoms/icons';
import { SmallCard } from '../components/molecules';
import { SimpleSwiper } from '../components/organisms';
import { useTransitionDelay } from '../hooks';

const LandingSimpleSwiperWrapper = () => {
  const isVisible = useTransitionDelay(1500);
  const smallCardItems = [
    {
      icon: <IconMarketing />,
      text: '해외 마케팅',
    },
    {
      icon: <IconImage />,
      text: '퍼블리셔',
    },
    {
      icon: <IconBox />,
      text: '캐드원(제도사)',
    },
    {
      icon: <IconTarget />,
      text: '해외 세일즈',
    },
    {
      icon: <IconCall />,
      text: '해외 마케팅',
    },
  ];
  return (
    <div className={twMerge('flex container hidden sm:block', isVisible ? 'opacity-100 animate-fadeIn ' : 'opacity-0')}>
      <SimpleSwiper
        items={smallCardItems.concat(smallCardItems).map((item, index) => (
          <SmallCard key={index} icon={item.icon} text={item.text} />
        ))}
      />
    </div>
  );
};
export default LandingSimpleSwiperWrapper;
