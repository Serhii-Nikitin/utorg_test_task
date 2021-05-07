import React from 'react';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__top-container">
      <div className="header__list">
        <div className="header__logo" />
        <a href="/" className="header__link">For merchant</a>
        <a href="/" className="header__link">Buy crypto</a>
      </div>
      <div className="header__sign">
        <a href="/" className="header__sign-button">Sign in</a>
        <a
          href="/"
          className="header__sign-button header__sign-button--active"
        >
          Sign up for free
        </a>
      </div>
    </div>
    <div className="header__burger-menu">
      <div className="header__logo" />
      <button
        type="button"
        className="header__burger-button"
      >
        <img src="images/Burger.svg" alt="burger" />
      </button>
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
