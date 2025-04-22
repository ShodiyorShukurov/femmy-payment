import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import DescriptionItem from '../components/DescriptionItem';
import FooterButton from '../components/FooterButton';
import { useSearchParams } from 'react-router-dom';

const Maqola = () => {
  const [searchParams] = useSearchParams();
  const data = searchParams.get("name");
console.log(data)

  return (
    <>
      <Header />
      <MainSection />
      {/* <DescriptionItem /> */}
      <FooterButton />
    </>
  );
};

export default Maqola;
