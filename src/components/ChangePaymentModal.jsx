import React from 'react';
import payment_close from '../assets/payment_close.svg';
import change from '../assets/change.svg';

const ChangePaymentModal = (isOpen, setIsOpen) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 w-full h-full pt-[40px]">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-[#0000000A] backdrop-blur-[8px]"
      />
      <div className="absolute modal w-full top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[12px]  px-6 pb-6 pt-[72px] container">
        <button
          className="absolute top-6 left-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <img src={payment_close} alt="" />
        </button>

        <h3 className="text-center  font-[SF-Pro-Rounded-Bold] text-[#3D3D3D] text-[24px] leading-[100%]">
          To’lov turini tanlang
        </h3>
        <p className="text-center font-[SF-Pro-Rounded-Regular] font-normal text-[#000000E5] text-[16px] leading-[20px] mt-1">
          O’zingiz uchun qulay bo’lgan to’lov tizimlardan birini tanlang!
        </p>

        <p className="mt-6 font-[SF-Pro-Rounded-Regular] font-normal text-[#3D3D3D] text-[16px] leading-[100%]">
          Sizning obuna tarifingiz
        </p>

        <div
          className={`flex items-center justify-between font-[SF-Pro-Rounded-Semibold] rounded-[16px] bg-[#FFF1F3] px-4 py-3 mt-[8px]`}
        >
          <div>
            <h3 className="text-[18px] leading-[22px] font-[SF-Pro-Rounded-SemiBold] font-semibold text-[#3D3D3D]">
              18 999 so’m/ Oylik Obuna
            </h3>
            <p className="mt-[2px] text-[14px] leading-[14px] text-[#6D6D6D] font-[SF-Pro-Rounded-Regular]">
              <span className="line-through">20 000 so’m</span>
              <span className="text-[#FF6C90] ml-1">20% Tejab qolish</span>
            </p>
          </div>
        </div>
        <div className='flex gap-1 items-center mt-2'>
            <img src={change} alt="" />
            <p className='text-[16px] leading-[24px] text-[#FF6C90] font-[SF-Pro-Rounded-SemiBold]'>Tarifini o’zgartirish</p>
        </div>
      </div>
    </div>
  );
};

export default ChangePaymentModal;
