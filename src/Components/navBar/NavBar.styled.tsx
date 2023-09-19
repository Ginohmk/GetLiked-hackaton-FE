import styled from 'styled-components';

export const NavBarContainer = styled.section`
  padding: 3rem 0;

  h2 {
    font-size: 2.2rem;
  }

  .nav-left-container {
    gap: 3rem;
    .nav-links {
      color: var(--white-color);
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      li {
        font-size: 1.2rem;
      }
    }

    .nav-btn {
      width: 172px;
      font-size: 1.15rem;
    }
  }
`;
