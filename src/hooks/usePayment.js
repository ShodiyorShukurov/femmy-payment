import React, { useEffect, useState } from 'react';

const usePayment = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [selectItem, setSelectItem] = React.useState(null);
  const [selectItem1, setSelectItem1] = React.useState(null);

  const getPayment = async () => {
    try {
      const response = await fetch('https://srvr.femmy.uz/api/v1/price', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPaymentData(data.data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  useEffect(() => {
    getPayment();
  }, []);

  useEffect(() => {
    if (paymentData.length > 1) {
      setSelectItem({
        price2: paymentData[1]?.price,
        title: `${paymentData[1]?.price ?? ''} so’m/ ${
          paymentData[1]?.title_uz
        } Obuna`,
        price: '240 000 so’m',
        sale: '30% Tejab qolish',
        tarif: paymentData[1]?.title_uz,
      });
    }
  }, [paymentData]);

  return { isOpen, setIsOpen, selectItem, setSelectItem, paymentData, selectItem1, setSelectItem1 };
};

export default usePayment;
