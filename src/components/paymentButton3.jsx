import React from 'react';
import PriceCheckbox3 from './PriceCheckbox3';

function PaymentButton3({ setSelectItem, paymentData, setIsOpen }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 pt-6 pb-[max(8px,env(safe-area-inset-bottom))] container px-4 bg-white">
      <PriceCheckbox3 setSelectItem={setSelectItem} paymentData={paymentData} />
      <button
        onClick={()=>setIsOpen(true)}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold mt-[20px]"
      >
        Davom etish
      </button>
    </div>
  );
}

export default PaymentButton3;
