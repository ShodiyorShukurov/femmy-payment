import React from 'react';
import PriceCheckbox from './PriceCheckbox';

function PaymentButton({ setSelectItem, paymentData, id, selectItem }) {
  const [checkbox1, setCheckBox1] = React.useState('1');

  const handleSubmit = async () => {
    if (checkbox1 == '2') {
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
    <div className="fixed bottom-0 left-0 right-0 pt-6 pb-[max(8px,env(safe-area-inset-bottom))] container px-4 bg-white">
      <PriceCheckbox
        setSelectItem={setSelectItem}
        paymentData={paymentData}
        handleSubmit={handleSubmit}
        checkbox1={checkbox1}
        setCheckBox1={setCheckBox1}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-[#EB2D69] text-white text-[16px] leading-[24px] py-4 rounded-[12px] font-bold mt-[20px]"
      >
        Davom etish
      </button>
    </div>
  );
}

export default PaymentButton;
