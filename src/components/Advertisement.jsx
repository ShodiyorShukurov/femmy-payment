import React from 'react';
import diamond from '../assets/diamond.svg';
import tick from '../assets/tick.svg';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Advertisement = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  function closeWebView() {
    if (!id) {
      CloseWebViewChannel.postMessage('close');
    } else {
      navigate('/payment2/' + id);
    }
  }

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

        <button
          onClick={closeWebView}
          className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold mt-4"
        >
          Premiumga o‘tish
        </button>

        <div className="flex items-center gap-2 mt-4">
          <div className="border-2 border-[#F6F6F6] rounded-[8px] h-[2px] w-full"></div>
          <p className="text-[12px] leading-[16px] text-[#000000E5] font-medium">
            yoki
          </p>
          <div className="border-2 border-[#F6F6F6] rounded-[8px] h-[2px] w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
