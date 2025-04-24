import React from 'react';

const usePayment = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const defaultItem = {}; 
  const [selectItem, setSelectItem] = React.useState(
    Object.keys(defaultItem).length > 0
      ? defaultItem
      : {
          title: '199 999 so’m/ Yillik Obuna',
          price: "240 000 so’m",
          sale: '30% Tejab qolish',
        }
  );
  return { isOpen, setIsOpen, selectItem, setSelectItem };
};

export default usePayment;
