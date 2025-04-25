import React from 'react';

const PriceCheckbox2 = ({ setSelectItem, paymentData, setIsOpen }) => {
  const [checkbox, setCheckBox] = React.useState('2');

  // const handleSubmit = async () => {
  //   if (checkbox == '2') {
  //     window.open(
  //       `https://my.click.uz/services/pay?merchant_id=26420&service_id=34442&transaction_param=Femmy&additional_param3=${id}&amount=${selectItem.price2}&additional_param4=${selectItem.tarif}`,
  //       '_blank'
  //     );
  //   } else {
  //     const url = btoa(
  //       `m=6697d19280d270b331826481;ac.user_id=${id};ac.tarif=${selectItem.tarif};ac.ilova=Femmy;a=${
  //         selectItem.price2 * 100
  //       }`
  //     );
  //     window.open(`https://checkout.paycom.uz/${url}`, '_blank');
  //   }
  // };

  return (
    <section className="pt-[27px]">
      <ul className="flex flex-col gap-4">
        {paymentData.map((item, index) => (
          <li
            key={item?.id}
            className={`flex items-center justify-between font-[SF-Pro-Rounded-Semibold] rounded-[16px] border ${
              checkbox == index + 1
                ? 'border-[#FF6C90] bg-[#FFF1F3]'
                : 'border-[#D1D1D1]'
            }  px-4 py-3`}
            onClick={() => {
              setCheckBox(index + 1);
              setSelectItem({
                title: `${item?.price} so’m/ ${item.title_uz} Obuna`,
                price2: item?.price,
                price: '20 000 so’m',
                sale: '20% Tejab qolish',
                tarif: item.title_uz,
              });
              setIsOpen(true)
            }}
          >
            <div>
              <h3 className="text-[17px] leading-[22px] font-[SF-Pro-Rounded-SemiBold] font-semibold text-[#3D3D3D]">
                {item.price} so’m/ {item.title_uz} Obuna
              </h3>
              <p className="mt-[2px] text-[14px] leading-[14px] text-[#6D6D6D] font-[SF-Pro-Rounded-Regular]">
                <span className="line-through">20 000 so’m</span>
                <span className="text-[#FF6C90] ml-1">20% Tejab qolish</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PriceCheckbox2;
