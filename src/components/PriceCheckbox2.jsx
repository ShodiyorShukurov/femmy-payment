import React from 'react';
import { useNavigate } from 'react-router-dom';

const PriceCheckbox2 = ({ paymentData, id, selectItem1, setSelectItem1 }) => {
  const navigate = useNavigate();

  return (
    <section className="pt-[27px]">
      <ul className="flex flex-col gap-4">
        {paymentData.map((item, index) => (
          <li
            key={item?.id}
            className={`flex items-center justify-between font-[SF-Pro-Rounded-Semibold] rounded-[16px] border border-[#D1D1D1]  px-4 py-3`}
            onClick={() => {
              setSelectItem1({
                title: `${item?.price} so’m/ ${item.title_uz} Obuna`,
                price2: item?.price,
                price: '20 000 so’m',
                sale: '20% Tejab qolish',
                tarif: item.title_uz,
              });
              navigate(
                `/payment2/modal/${id}?price=${selectItem1.price2}&tarif=${selectItem1.tarif}`
              );
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
