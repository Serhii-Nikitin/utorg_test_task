import React from 'react';

export const Header = () => (
  <header className="header">
    <div className="header__top-container">
      <div className="header__list">
        <div className="header__logo" />
        <button type="button" className="header__link">For merchant</button>
        <button type="button" className="header__link">Buy crypto</button>
      </div>
      <div className="header__sign">
        <button type="button" className="header__sign-button">Sign in</button>
        <button
          type="button"
          className="header__sign-button header__sign-button--active"
        >
          Sign up for free
        </button>
      </div>
    </div>
    <div className="header__bottom-container">
      <div className="header__router-buttons">
        <a
          href="/"
          className="header__router-link header__router-link--active"
        >
          Home
        </a>
        {` / `}
        <a
          href="/"
          className="header__router-link"
        >
          FAQ
        </a>
      </div>
    </div>
  </header>
);
