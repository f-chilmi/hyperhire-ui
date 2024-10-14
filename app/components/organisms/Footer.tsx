import { Logo } from '@/app/assets/logo';
import Image from 'next/image';
import React from 'react';
import { BorderedIcon } from '../molecules';
import { IconAvatar, IconCode, IconGear, IconKor, IconRightSquare } from '../atoms/icons';
import { Button } from '../atoms';

function Footer() {
  const services = [
    {
      icon: <BorderedIcon className="bg-[#EFF1F6] w-[40px] h-[40px] p-[8px]" icon={<IconCode fill="#7388A9" />} />,
      text: '해외 개발자 원격 채용',
    },
    {
      icon: <BorderedIcon className="bg-[#EFF1F6] w-[40px] h-[40px] p-[8px]" icon={<IconAvatar fill="#7388A9" />} />,
      text: '외국인 원격 채용 (비개발)',
    },
    {
      icon: <BorderedIcon className="bg-[#EFF1F6] w-[40px] h-[40px] p-[8px]" icon={<IconKor fill="#7388A9" />} />,
      text: '한국어 가능 외국인 채용',
    },
    {
      icon: <BorderedIcon className="bg-[#EFF1F6] w-[40px] h-[40px] p-[8px]" icon={<IconGear fill="#7388A9" />} />,
      text: '해외 개발자 활용 서비스',
    },
  ];
  return (
    <div className="flex flex-col items-center py-[60px] sm:py-[100px] text-[#5E626F] px-4 sm:px-0 ">
      <div className="container ">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Image src={Logo} alt="Logo " width={187} height={34} />
            <p className="font-[900] text-[14px] text-[#343741] ">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <div>
              <p className="font-[900] text-[13px] text-[#5E626F]">010-0000-0000</p>
              <p className="font-[900] text-[13px] text-[#5E626F]">aaaaa@naver.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="rounded-[12px] gap-y-[16px] flex flex-col p-[16px] bg-white items-start">
                {service.icon}
                <p className="text-[#343741] text-[14px] font-[900]"> {service.text}</p>
                <Button
                  endIcon={<IconRightSquare fill="#5E626F" />}
                  variant="text"
                  className="text-[#5E626F] text-[14px] !px-0 !py-0">
                  바로가기
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-4 container grid grid-cols-4 sm:grid-cols-7 gap-[20px] mt-[40px] ">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-[12px] font-[900]">상호명</p>
          <p className="text-[13px] font-[900]">하이퍼하이어</p>
          <p className="text-[13px] font-[900]">Hyperhire India Private Limited</p>
        </div>
        <div className="col-span-1 sm:col-span-1">
          <p className="text-[12px] font-[900]">대표 CEO</p>
          <p className="text-[13px] font-[900]">김주현</p>
          <p className="text-[13px] font-[900]">Juhyun Kim</p>
        </div>
        <div className="col-span-4 sm:col-span-1">
          <p className="text-[12px] font-[900]">사업자등록번호 CIN</p>
          <p className="text-[13px] font-[900]">427-86-01187</p>
          <p className="text-[13px] font-[900]">U74110DL2016PTC290812 </p>
        </div>
        <div className="col-span-4 sm:col-span-3">
          <p className="text-[12px] font-[900]">주소 ADDRESS</p>
          <p className="text-[13px] font-[900]">서울특별시 강남대로 479, 지하 1층 238호 </p>
          <p className="text-[13px] font-[900]">
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
          </p>
        </div>
      </div>

      <div className="container mt-[40px]">
        <p className="text-[13px] font-[900]">ⓒ 2023 Hyperhire</p>
      </div>
    </div>
  );
}

export default Footer;
