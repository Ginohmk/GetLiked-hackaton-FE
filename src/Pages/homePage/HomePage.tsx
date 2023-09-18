import React from 'react';
import { NavBar } from '../../Components/navBar/NavBar';
import { HomepageContainer } from './HomePage.style';
import Banner from '../../Components/banner/Banner';
import Main from '../../Components/main/Main';

const HomePage: React.FC = () => {
  return (
    <HomepageContainer>
      <NavBar />

      <hr className="home-line" />

      <Banner />

      <hr className="home-line" />

      <Main />
    </HomepageContainer>
  );
};

export default HomePage;
