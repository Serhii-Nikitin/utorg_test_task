import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__logo" />
    <div className="footer__contact-details">
      <div className="footer__social-media">
        <div className="footer__facebook">
          <a
            className="footer__social-media-link"
            href="https://uk-ua.facebook.com/"
          >
            FaceBook
          </a>
        </div>
        <div className="footer__twitter">
          <a
            className="footer__social-media-link"
            href="https://twitter.com/"
          >
            Twitter
          </a>
        </div>
        <div className="footer__blog">
          <a
            className="footer__social-media-link"
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
    <div className="footer__menu">
      <div className="footer__block footer__block--services">
        <div className="footer__title">services</div>
        <div className="footer__services-info">
          <div className="footer__list-wrapper">
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  USD to BTC
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  EUR to BTC
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  RUB to BTC
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  UAH to BTC
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  USD to BTC
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  EUR to BTC
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  RUB to BTC
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="/"
                  className="footer__link"
                >
                  UAH to BTC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__block footer__block--learn">
        <div className="footer__title">learn</div>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              How It Works
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Account
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              FAQ
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__block footer__block--about-us">
        <div className="footer__title">about us</div>
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Reviews
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Certified
            </a>
          </li>
          <li className="footer__item">
            <a
              href="/"
              className="footer__link"
            >
              Our partners
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer__support">
      support@utorg.pro
    </div>
  </footer>
);
