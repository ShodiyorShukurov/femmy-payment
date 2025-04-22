import { useState, useEffect } from 'react';
import PriceCheckbox from './PriceCheckbox';
import DescriptionItem from './DescriptionItem';

const API_URL = 'https://srvr.qiblah.app/api/v1';

function Payment() {
  const [prices, setPrices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [paymentHref, setPaymentHref] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/payment/prices`);
        const json = await response.json();
        setPrices(json.data);
        setPaymentHref(
          `https://checkout.paycom.uz/${btoa(
            `m=6697d19280d270b331826481;ac.user_id=%user_id%;ac.tarif=${json.data[0].name.slice(
              8
            )};ac.ilova=Qiblah;a=${json.data[0].price.slice(0, -3) * 100}`
          )}`
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (index, href = null) => {
    setSelectedIndex(index);
    if (href) {
      setPaymentHref(href);
    } else {
      const defaultHref = `https://checkout.paycom.uz/${btoa(
        `m=6697d19280d270b331826481;ac.user_id=%user_id%;ac.tarif=${prices[
          index
        ].name.slice(8)};ac.ilova=Qiblah;a=${
          prices[index].price.slice(0, -3) * 100
        }`
      )}`;
      setPaymentHref(defaultHref);
    }
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="text-center">
        <img
          src="https://srvr.qiblah.app/public/images/1733915268163-image.png"
          alt="Qiblah Logo"
          className="mx-auto mb-5 w-[100px]"
        />
        <h1 className="text-[20px] mb-[15px]">Lalu PREMIUM</h1>
      </header>
      <main className="flex-1 px-4">
        <div className="bg-[#fdf8e9] rounded-[10px] mb-4">
          {prices.map((price, index) => (
            <PriceCheckbox
              key={index}
              price={price}
              index={index}
              isChecked={selectedIndex === index}
              onChange={handleCheckboxChange}
              prices={prices}
            />
          ))}
        </div>
        <div className="bg-[#fdf8e9] rounded-lg mb-4">
          {Array(5)
            .fill()
            .map((_, index) => (
              <DescriptionItem key={index} />
            ))}
        </div>
        <div className="h-[50px]"></div>
      </main>
      <footer className="sticky bottom-0 bg-white rounded-t-lg p-5">
        <a
          href={paymentHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#fe8c67] text-white rounded-lg py-3 text-xs"
        >
          <span className="block font-bold text-sm">
            {prices[selectedIndex]?.price || ''}
          </span>
          Obuna bo'lish
        </a>
      </footer>
    </div>
  );
}

export default Payment;
