import React from 'react';
import payment_close from '../assets/payment_close.svg';
import change from '../assets/change.svg';
import payme from '../assets/payme.png';
import click from '../assets/click.png';

const ChangePaymentModal = ({ isOpen, setIsOpen, selectItem, id }) => {
  if (!isOpen) return null;

  const [checkbox, setCheckBox] = React.useState('1');

  const handleSubmit = async (id) => {
    if (id == 2) {
      window.open(
        `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Femmy&additional_param3=${id}&amount=${selectItem.price2}&additional_param4=${selectItem.tarif}`,
        '_blank'
      );
    } else {
      const url = btoa(
        `m=6697d19280d270b331826481;ac.user_id=${id};ac.tarif=${
          selectItem.tarif
        };ac.ilova=Femmy;a=${selectItem.price2 * 100}`
      );
      window.open(`https://checkout.paycom.uz/${url}`, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-[#00000052] backdrop-blur-[32px]"
      />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[12px] pt-[72px] px-6 pb-6 w-full">
        <button
          className="absolute top-6 left-6 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <img src={payment_close} alt="" />
        </button>

        <ul className="mt-8 flex flex-col gap-4">
          <li
            className={`flex items-center justify-between px-4 py-3 border border-[#D1D1D1] rounded-[16px]`}
            onClick={() => {
              handleSubmit(1);
            }}
          >
            <img className="w-[82px] h-[32px]" src={payme} alt="payme" />
          </li>

          <li
            className={`flex items-center justify-between px-4 py-3 border  border-[#D1D1D1] rounded-[16px]`}
            onClick={() => {
              handleSubmit(2);
            }}
          >
            <img className="w-[82px] h-[32px]" src={click} alt="click" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChangePaymentModal;
