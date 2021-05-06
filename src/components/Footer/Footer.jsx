import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__logo" />
    <div className="footer__contact-details">
      <div className="footer__social-media">
        <div className="footer__facebook">
          <a
            className="footer__link"
            href="https://uk-ua.facebook.com/"
          >
            FaceBook
          </a>
        </div>
        <div className="footer__twitter">
          <a
            className="footer__link"
            href="https://twitter.com/"
          >
            Twitter
          </a>
        </div>
        <div className="footer__blog">
          <a
            className="footer__link"
            href="/"
          >
            Blog
          </a>
        </div>
      </div>
      <p className="footer__contact-info">
        Utorg OÜ
        <br />
        Roosikrantsi tn 2-1068, Kesklinna district, Tallinn, Harju
        county,&nbsp;10119, Estonia
      </p>
      <p className="footer__contact-info">
        Wallets in FIAT currencies (as USD, EUR or other) can be used only
        for short-term storage of funds for cryptocurrencies purchase
      </p>
      <ul className="footer__info-list">
        <li className="footer__info-item">© Utorg 2020. All Rights Reserved</li>
        <li className="footer__info-item">Terms of Use</li>
        <li className="footer__info-item">Privacy Policy</li>
        <li className="footer__info-item">KYC/AML Policy</li>
      </ul>
    </div>
    {/* <div className="footer__info">

    </div>
    <div className="footer__support">

    </div> */}
  </footer>
);
