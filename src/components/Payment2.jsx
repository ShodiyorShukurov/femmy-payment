import React from 'react';
import payment_close from '../assets/payment_close.svg';
import usePayment from '../hooks/usePayment';
import { useParams } from 'react-router-dom';
import PriceCheckbox2 from './PriceCheckbox2';

const Payment2 = () => {
  const { paymentData, selectItem1, setSelectItem1 } = usePayment();
  const { id } = useParams();

  function closeWebView() {
    if (window.CloseWebViewChannel) {
      CloseWebViewChannel.postMessage('close');
    } else {
      window.history.back();
    }
  }

  return (
    <section className="pt-2 px-4">
      <div className="container flex flex-col justify-center h-screen">
        <h3 className="font-[SF-Pro-Rounded-Bold] text-[#3D3D3D] text-[28px] leading-[100%] text-center">
          Tarif turini tanlang
        </h3>
        <button
          className="absolute top-4 left-4 cursor-pointer"
          onClick={closeWebView}
        >
          <img src={payment_close} alt="" />
        </button>

        <PriceCheckbox2
          setSelectItem1={setSelectItem1}
          paymentData={paymentData}
          id={id}
          selectItem1={selectItem1}
        />
      </div>
    </section>
  );
};

export default Payment2;
