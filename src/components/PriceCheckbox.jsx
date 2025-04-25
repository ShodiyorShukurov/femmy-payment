import React from 'react';

const PriceCheckbox = ({ setSelectItem, paymentData }) => {
  const [checkbox, setCheckBox] = React.useState('2');

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
                tarif: item.title_uz
              });
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

            <div
              className={`w-[20px] h-[20px] rounded-full border ${
                checkbox == index + 1 ? 'border-[#EB2D69]' : 'border-[#D1D1D1]'
              } flex justify-center items-center`}
            >
              <div
                className={`w-[8px] h-[8px] rounded-full ${
                  checkbox == index + 1 ? 'bg-[#EB2D69] flex' : 'hidden'
                }`}
              ></div>
            </div>
          </li>
        ))}

        {/* <li
          className={`flex items-center justify-between font-[SF-Pro-Rounded-Semibold] rounded-[16px] border ${
            checkbox == '2'
              ? 'border-[#FF6C90] bg-[#FFF1F3]'
              : 'border-[#D1D1D1]'
          }  px-4 py-3`}
          onClick={() => {
            setCheckBox('2');
            setSelectItem({
              title: '199 999 so’m/ Oylik Obuna',
              price: '240 000 so’m',
              sale: '30% Tejab qolish',
            });
          }}
        >
          <div>
            <h3 className="text-[17px] leading-[22px] font-[SF-Pro-Rounded-SemiBold] font-semibold text-[#3D3D3D]">
              199 999 so’m/ Yillik Obuna
            </h3>
            <p className="mt-[2px] text-[14px] leading-[14px] text-[#6D6D6D] font-[SF-Pro-Rounded-Regular]">
              <span className="line-through">240 000 so’m</span>
              <span className="text-[#FF6C90] ml-1">30% Tejab qolish</span>
            </p>
          </div>

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

        <li
          className={`flex items-center justify-between font-[SF-Pro-Rounded-Semibold] rounded-[16px] border ${
            checkbox == '3'
              ? 'border-[#FF6C90] bg-[#FFF1F3]'
              : 'border-[#D1D1D1]'
          }  px-4 py-3`}
          onClick={() => {
            setCheckBox('3');
            setSelectItem({
              title: '999 999 so’m/ Oylik Obuna',
              price: '2 000 000 so’m',
              sale: '50% Tejab qolish',
            });
          }}
        >
          <div>
            <h3 className="text-[17px] leading-[22px] font-[SF-Pro-Rounded-SemiBold] font-semibold text-[#3D3D3D]">
              999 999 so’m/ Umrbodlik Obuna
            </h3>
            <p className="mt-[2px] text-[14px] leading-[14px] text-[#6D6D6D] font-[SF-Pro-Rounded-Regular]">
              <span className="line-through">2 000 000 so’m</span>{' '}
              <span className="text-[#FF6C90] ml-1">50% Tejab qolish</span>
            </p>
          </div>

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
    </section>
  );
};

export default PriceCheckbox;
