import React from 'react';
import payment from '../assets/payment.png';
import diamond from '../assets/diamond.svg';
import payment_close from '../assets/payment_close.svg'
import tick from '../assets/tick.svg';
import PriceCheckbox from './PriceCheckbox';
import PaymentButton from './PaymentButton';
import usePayment from '../hooks/usePayment';
import ChangePaymentModal from './ChangePaymentModal';

const Payment = () => {
  const { isOpen, setIsOpen } = usePayment();

  return (
    <section className="pt-2 px-4">
      <div className="container">
        <img className="w-[110px] h-[125px] mx-auto" src={payment} alt="" />

        <button
          className="absolute top-4 left-4 cursor-pointer"
        //   onClick={onClose}
        >
         <img src={payment_close} alt="" />
        </button>

        <div className="flex items-center gap-1 justify-center mt-4">
          <img src={diamond} alt="diamond" className="h-[32px] w-[32px]" />
          <h1 className="font-[SF-Pro-Rounded-Bold] text-[#3D3D3D] text-[28px] leading-[100%]">
            Femmy Premium{' '}
          </h1>
        </div>

        <ul className="font-[SF-Pro-Rounded-Bold] mt-4 flex flex-col items-start gap-3">
          <li className="flex items-center justify-center gap-[5px]">
            <img src={tick} alt="tick" className="h-[32px] w-[32px]" />
            <div>
              <h2 className="text-[#4F4F4F] text-[18px] leading-[20px]">
                Ginekolog Ai{' '}
              </h2>
              <p className="text-[#6D6D6D] text-[16px] leading-[22px] font-[SF-Pro-Rounded-Regular] font-normal">
                Ginekolog Ai bilan cheksiz chat imkoniyati
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center gap-[5px]">
            <img src={tick} alt="tick" className="h-[32px] w-[32px]" />
            <div>
              <h2 className="text-[#4F4F4F] text-[18px] leading-[20px]">
                Premium Maqolalar
              </h2>
              <p className="text-[#6D6D6D] text-[16px] leading-[22px] font-[SF-Pro-Rounded-Regular] font-normal">
                Sog‘lig‘ingiz uchun eng foydali maqolalar
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center gap-[5px]">
            <img src={tick} alt="tick" className="h-[32px] w-[32px]" />
            <div>
              <h2 className="text-[#4F4F4F] text-[18px] leading-[20px]">
                Reklamalarsiz
              </h2>
              <p className="text-[#6D6D6D] text-[16px] leading-[22px] font-[SF-Pro-Rounded-Regular] font-normal">
                Reklamalarsiz ilovadan foydalanish imkoniyati
              </p>
            </div>
          </li>
        </ul>

        <PriceCheckbox />

        <PaymentButton setIsOpen={setIsOpen} />
        <ChangePaymentModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </section>
  );
};

export default Payment;
