import React from 'react';
import './Nav.scss';

export const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a
          href="#General_questions"
          className="nav__link nav__link--active"
        >
          General questions
        </a>
      </li>
      <li className="nav__item">
        <a href="#Payment_questions" className="nav__link">Payment questions</a>
      </li>
      <li className="nav__item">
        <a href="#Transaction" className="nav__link">Transaction</a>
      </li>
      <li className="nav__item">
        <a href="#Verification" className="nav__link">Verification</a>
      </li>
    </ul>
  </nav>
);
