import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdvertisementButton = ({ id }) => {
  const navigate = useNavigate();

  function closeWebView() {
    if (!id) {
      CloseWebViewChannel.postMessage('close');
    } else {
      navigate('/payment2/' + id);
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 pt-4 container bg-[white] px-4">
      <button
        onClick={closeWebView}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold"
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
  );
};

export default AdvertisementButton;
