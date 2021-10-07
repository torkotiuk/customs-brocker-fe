import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LandingPage } from '../';

const HomePage = () => {
  const history = useHistory();
  
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');

    if (userInfo) {
      history.push('/mydeclarations');
    }
  }, [history]);
  return (
    <>
        <LandingPage />
    </>
  );
};

export default HomePage;
