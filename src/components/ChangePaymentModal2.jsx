import React from 'react';
import payment_close from '../assets/payment_close.svg';

import payme from '../assets/payme.png';
import click from '../assets/click.png';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ChangePaymentModal = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const price = searchParams.get('price');
  const tarif = searchParams.get('id2');

  const handleSubmit = async (idNum) => {
    if (idNum == 2) {
      window.open(
        `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Femmy&additional_param3=${id}&amount=${price}&additional_param4=${tarif}`,
        '_blank'
      );
    } else {
      const url = btoa(
        `m=6697d19280d270b331826481;ac.user_id=${id};ac.tarif=${tarif};ac.ilova=Femmy;a=${
          price * 100
        }`
      );
      window.open(`https://checkout.paycom.uz/${url}`, '_blank');
    }
  };

  return (
    <div className="container px-4 flex flex-col justify-center h-screen">
      <button
        className="absolute top-6 left-6 cursor-pointer"
        onClick={() => navigate('/payment2/' + id)}
      >
        Orqaga
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
  );
};

export default ChangePaymentModal;
