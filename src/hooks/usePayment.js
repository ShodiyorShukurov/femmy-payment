import React from 'react';

const usePayment = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return { isOpen, setIsOpen };
};

export default usePayment;
