import React from 'react';
import diamond from '../assets/diamond.svg';
import tick from '../assets/tick.svg';
import {  useSearchParams } from 'react-router-dom';
import AdvertisementButton from './AdvertisementButton';

const Advertisement = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');


  return (
    <section>
      <div className="container p-4">
        <div className="flex items-center gap-1">
          <img src={diamond} alt="diamond" width={32} height={32} />
          <h2 className="text-[22px] leading-[28px] text-[#000000E5] font-bold">
            Premium
          </h2>
        </div>
        <p className="text-[14px] leading-[20px] text-[#000000E5] mt-3">
          Femmy Premiumga obuna bo’lish orqali Ginekolog Ai bilan chatni davom
          ettiring
        </p>
        <div className="mt-1">
          <div className="flex items-center gap-2">
            <img src={tick} alt="tick" width={24} height={24} />
            <h2 className="text-[16px] leading-[24px] font-bold">
              Cheklanmagan promplar
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <img src={tick} alt="tick" width={24} height={24} />
            <h2 className="text-[16px] leading-[24px] font-bold">
              Cheksiz muloqot
            </h2>
          </div>
        </div>

        <AdvertisementButton id={id}/>
      </div>
    </section>
  );
};

export default Advertisement;
