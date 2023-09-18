import React from 'react';
import { NavBarContainer } from './NavBar.styled';

export const NavBar: React.FC = () => {
  return (
    <NavBarContainer className="column-width flex-space-btw">
      <h2>
        <span className="first-child">get</span>
        <span className="second-child">linked</span>
      </h2>

      <section className="nav-left-container flex-space-btw">
        <ul className="nav-links">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>

        <button className="nav-btn btn-primary">Register</button>
      </section>
    </NavBarContainer>
  );
};
