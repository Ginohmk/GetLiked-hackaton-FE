import React from 'react';
import { BannerContainer } from './Banner.style';
import Chain from '../../assets/images/banner-chain.svg';
import BrightStar from '../../assets/images/banner-star.svg';
import BentLine from '../../assets/images/banner-bent-line.svg';
import Bulb from '../../assets/images/banner-bulb.svg';
import BlinkStar from '../../assets/images/baner-blink-star.svg';

const Banner = () => {
  return (
    <BannerContainer>
      <div className="banner-header-container">
        <h1 className="banner-header">
          Igniting a Revolution in HR Innovation
        </h1>
        <span className="banner-header-img-container">
          <img src={BentLine} alt="bent underline" />
        </span>
      </div>

      <div className="banner-inner-container">
        <div className=" column-width">
          <div className="banner-left-side-container">
            <img
              src={BlinkStar}
              alt="banner blinking star"
              className="banner-blick-star"
            />
            <div className="banner-heading">
              <div>
                <img src={Bulb} alt="bulb icon" className="banner-blub-img" />
              </div>
              <span className="banner-upper-heading ">getlinked Tech</span>
              <div className="banner-lower-heading">
                <div>
                  <span className="first-child-text">Hackathon</span>
                  <span className="second-child-text">1.0</span>
                </div>

                <div className="banner-lower-heading-icons">
                  <img src={Chain} alt="Chain icon" />
                  <img src={BrightStar} alt="Chain icon" />
                </div>
              </div>
            </div>

            <p className="banner-para">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="btn-timer-container">
              <button className="banner-btn btn-primary">Register</button>

              <div className="banner-timer-container">
                <div className="banner-timer-item">
                  <span className="timer">00</span>{' '}
                  <span className="timer-sign">H</span>
                </div>

                <div className="banner-timer-item">
                  <span className="timer">00</span>{' '}
                  <span className="timer-sign">M</span>
                </div>

                <div className="banner-timer-item">
                  <span className="timer">00</span>{' '}
                  <span className="timer-sign">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-right-side-container"></div>
      </div>
    </BannerContainer>
  );
};

export default Banner;

{
  /* <img src={BannerBg} alt="Banner piture" /> */
}
