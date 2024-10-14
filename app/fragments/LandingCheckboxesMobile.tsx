import Checkbox from '@mui/material/Checkbox';
import React from 'react';

const LandingCheckboxesMobile = () => {
  const checkItems = ['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회'];
  return (
    <>
      <div className="sm:hidden grid grid-cols-2">
        {checkItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <Checkbox sx={{ color: '#2C599B' }} checked value={item} inputProps={{ 'aria-label': 'Checkbox demo' }} />
            <p className="text-[16px] font-[900]">{item}</p>
          </div>
        ))}
      </div>
      <p className="sm:hidden text-[16px] text-[#FBFF23] font-[900]">개발자가 필요하신가요?</p>
    </>
  );
};

export default LandingCheckboxesMobile;
