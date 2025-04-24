import React from 'react';
import payment_close from '../assets/payment_close.svg';
import change from '../assets/change.svg';
import payme from '../assets/payme.png';
import click from '../assets/click.png';

const ChangePaymentModal = ({ isOpen, setIsOpen, selectItem }) => {
  if (!isOpen) return null;

  const [checkbox, setCheckBox] = React.useState('1');

  const handleSubmit = async () => {
    if (checkbox == '2') {
      window.location.href = `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Femmy&additional_param3=232&amount=1000&additional_param4=umrbod`;
    } else {
      window.location.href = `https://checkout.paycom.uz/${btoa(
        'm=6697d19280d270b331826481;ac.user_id=2;ac.tarif=umrbod;ac.ilova=Femmy;a=100000'
      )}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-[#0000000A] backdrop-blur-[8px]"
      />
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[12px] pt-[72px] px-6 pb-6 w-full  max-w-[90%] mx-auto">
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
              {selectItem.title}
            </h3>
            <p className="mt-[2px] text-[14px] leading-[14px] text-[#6D6D6D] font-[SF-Pro-Rounded-Regular]">
              <span className="line-through">{selectItem.price}</span>
              <span className="text-[#FF6C90] ml-1">{selectItem.sale}</span>
            </p>
          </div>
        </div>

        <div
          className="flex gap-1 items-center mt-2"
          onClick={() => setIsOpen(false)}
        >
          <img src={change} alt="" />
          <p className="text-[16px] leading-[24px] text-[#FF6C90] font-[SF-Pro-Rounded-SemiBold]">
            Tarifini o’zgartirish
          </p>
        </div>

        <ul className="mt-8 flex flex-col gap-4">
          <li
            className={`flex items-center justify-between px-4 py-3 border ${
              checkbox == '1'
                ? 'border-[#FF6C90] bg-[#FFF1F3]'
                : 'border-[#D1D1D1]'
            } rounded-[16px]`}
            onClick={() => setCheckBox('1')}
          >
            <img className="w-[82px] h-[32px]" src={payme} alt="payme" />

            <div
              className={`w-[20px] h-[20px] rounded-full border ${
                checkbox == '1' ? 'border-[#EB2D69]' : 'border-[#D1D1D1]'
              } flex justify-center items-center`}
            >
              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  checkbox == '1' ? 'bg-[#EB2D69] flex' : 'hidden'
                }`}
              ></div>
            </div>
          </li>

          <li
            className={`flex items-center justify-between px-4 py-3 border ${
              checkbox == '2'
                ? 'border-[#FF6C90] bg-[#FFF1F3]'
                : 'border-[#D1D1D1]'
            } rounded-[16px]`}
            onClick={() => setCheckBox('2')}
          >
            <img className="w-[82px] h-[32px]" src={click} alt="click" />

            <div
              className={`w-[20px] h-[20px] rounded-full border ${
                checkbox == '2' ? 'border-[#EB2D69]' : 'border-[#D1D1D1]'
              } flex justify-center items-center`}
            >
              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  checkbox == '2' ? 'bg-[#EB2D69] flex' : 'hidden'
                }`}
              ></div>
            </div>
          </li>

          {/* <li
            className={`flex items-center justify-between px-4 py-3 border ${
              checkbox == '3'
                ? 'border-[#FF6C90] bg-[#FFF1F3]'
                : 'border-[#D1D1D1]'
            } rounded-[16px]`}
            onClick={() => setCheckBox('3')}
          >
            <img className="w-[82px] h-[32px]" src={uzum} alt="uzum" />

            <div
              className={`w-[20px] h-[20px] rounded-full border ${
                checkbox == '3' ? 'border-[#EB2D69]' : 'border-[#D1D1D1]'
              } flex justify-center items-center`}
            >
              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  checkbox == '3' ? 'bg-[#EB2D69] flex' : 'hidden'
                }`}
              ></div>
            </div>
          </li> */}
        </ul>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] mt-[32px]"
        >
          Davom etish
        </button>
      </div>
    </div>
  );
};

export default ChangePaymentModal;
