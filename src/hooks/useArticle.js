import { useEffect, useState } from 'react';

const useArticle = (id) => {
  const [articleData, setArticleData] = useState([]);

  const getArticle = async () => {
    try {
      const response = await fetch('https://srvr.femmy.uz/api/v1/article/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setArticleData(data.data);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return{articleData}
};

export default useArticle;
