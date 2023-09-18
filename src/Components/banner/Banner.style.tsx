import styled from 'styled-components';
import BannerBg from '../../assets/images/banner-bg-image.png';

export const BannerContainer = styled.section`
  /* height: 90vh; */
  overflow-y: hidden;
  margin-bottom: -7.5px;

  .banner-header-container {
    position: relative;
    .banner-header {
      font-size: 2.3rem;
      text-align: right;
      color: var(--white-color);
      padding-right: 1.3rem;
    }

    .banner-header-img-container {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: -25px;
      padding-right: 1.3rem;
      img {
        position: absolute;
      }
    }
  }

  .banner-inner-container {
    display: flex;
    justify-content: space-between;

    .banner-left-side-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      padding-left: 1.5rem;

      .banner-blick-star {
        position: absolute;
        left: 4.5rem;
        top: 0;
      }

      .banner-heading {
        font-size: 5.4rem;
        z-index: 2;
        position: relative;

        .banner-blub-img {
          position: absolute;
          right: 120px;
          top: -45px;
          z-index: 3;
        }

        .banner-upper-heading {
          color: var(--white-color);
        }

        .banner-lower-heading {
          display: flex;
          gap: 1rem;

          .banner-lower-heading-icons {
            height: 65px;
            width: 65px;
            display: flex;
            gap: 0.5rem;
            align-self: flex-end;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .banner-para {
        color: var(--white-color);
        line-height: 1.8rem;
        max-width: 480px;
        font-size: 1.4rem;
        width: 100%;
      }

      .btn-timer-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.3rem;

        .banner-btn {
          max-width: 172px;
        }

        .banner-timer-container {
          color: var(--white-color);
          display: flex;
          gap: 1.15rem;

          .banner-timer-item {
            .timer {
              font-size: 3rem;
            }

            .timer-sign {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }

  .banner-right-side-container {
    width: 90%;
    height: 650px;
    background-image: url(${BannerBg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 100% 200%;
  }
`;
