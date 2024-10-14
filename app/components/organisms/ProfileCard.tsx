import React from 'react';
import { AvatarWithFlag } from '../molecules';
import { Chip } from '../atoms';

export interface UserSimple {
  id: number;
  avatarUrl: string;
  countryCode: string;
  name: string;
  title: string;
  experience: string;
  skills: string[];
}

function ProfileCard({ data }: { data: UserSimple }) {
  return (
    <div className="rounded-[12px] p-[36px] w-[234px] sm:w-[292px] shadow-lg bg-white flex flex-col items-center gap-y-6">
      <AvatarWithFlag src={data.avatarUrl} countryCode={data.countryCode} />
      <div className="text-center">
        <h3 className="font-[900] text-[18px] sm:text-[24px] text-[#24252F]">{data.name}</h3>
        <p className="text-[#4A77FF] text-[14px] sm:text-[16px]">
          {data.title} <span className="font-[900]"> · {data.experience}</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {data.skills?.map((skill, index) => <Chip text={skill} key={index} />)}
      </div>
    </div>
  );
}

export default ProfileCard;
