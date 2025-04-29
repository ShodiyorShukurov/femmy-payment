import React from 'react';
import { useNavigate } from 'react-router-dom';

const PriceCheckbox2 = ({ paymentData, id, selectItem1, setSelectItem1 }) => {
  const navigate = useNavigate();

  return (
    <section className="pt-[27px]">
      <ul className="flex flex-col gap-4">
        {paymentData.map((item) => (
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
                `/ads2/modal/${id}?price=${item.price}&tarif=${item.title_uz}`
              );
            }}
          >
            <div>
              <h3 className="text-[17px] leading-[22px] font-[SF-Pro-Rounded-SemiBold] font-semibold text-[#3D3D3D]">
                {item.period >= 365 && item.period <= 370 ? (
                  <div className="flex items-center gap-6">
                    {' '}
                    {item.title_uz} Obuna{' '}
                    <div
                      className={`rounded-[16px] border border-[#FF6C90] bg-[#FFF1F3] text-[14px] px-2`}
                    >
                      Tavsiya etamiz
                    </div>
                  </div>
                ) : (
                  item.title_uz + ' Obuna'
                )}
              </h3>
              <p className="mt-[2px] text-[14px] leading-[14px] text-[#6D6D6D] font-[SF-Pro-Rounded-Regular]">
                {item.period >= 365 && item.period <= 370 ? (
                  <div className="flex items-center">
                    <p className="mr-3">
                      {Math.floor(item.price / 12).toLocaleString('en-US')} /
                      oyiga;{' '}
                    </p>
                    <p>yiliga {Number(item.price).toLocaleString('en-US')}</p>
                  </div>
                ) : item.period >= 25 && item.period <= 35 ? (
                  Number(item.price).toLocaleString('en-US') + ' / oyiga'
                ) : (
                  Number(item.price).toLocaleString('en-US') + ' / Bir marta'
                )}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PriceCheckbox2;
