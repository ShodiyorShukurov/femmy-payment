import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
// import DescriptionItem from '../components/DescriptionItem';
import FooterButton from '../components/FooterButton';
import { useSearchParams } from 'react-router-dom';
import useArticle from '../hooks/useArticle';

const Maqola = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id1');
  const user_id = searchParams.get('id2');

  const { articleData } = useArticle(id);

  return (
    <>
      {articleData?.image_url ? <Header articleData={articleData} /> : ''}
      <MainSection articleData={articleData} />
      {/* <DescriptionItem /> */}
      <FooterButton id={user_id} />
    </>
  );
};

export default Maqola;
