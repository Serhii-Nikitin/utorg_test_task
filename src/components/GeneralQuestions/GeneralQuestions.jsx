import React from 'react';

export const GeneralQuestios = () => (
  <div className="main__section">
    <h2 className="main__subtitle">General questions</h2>

    <input
      type="checkbox"
      id="main__question"
      className="main__question-checkbox"
    />
    <label className="main__question" htmlFor="main__question">
      Which is the best Bitcoin wallet?
    </label>
    <div className="main__answer main__answer--active">
      <p>Кошельки бывают:</p>
      <ul className="main__wallets-list">
        <li className="main__wallets-item">Desktop wallets</li>
        <li className="main__wallets-item">Hardware wallets</li>
        <li className="main__wallets-item">
          Online wallets or Mobile wallets
        </li>
        <li className="main__wallets-item">Paper wallets</li>
      </ul>

      <p className="main__answer-info">
        {`Самые удобные — мобильные кошельки. Например `}
        <a
          href="https://www.exodus.com/"
          className="main__answer-link"
        >
          Exodus
        </a>
      </p>

      <ul className="main__recommended-walets-list">
        Вот несколько, которые хорошо себя зарекомендовали
        <li className="main__recommended-walets-item">
          {`Mobile: `}
          <a
            href="https://www.exodus.com/"
            className="main__answer-link"
          >
            Exodus
          </a>
        </li>
        <li className="main__recommended-walets-item">
          {`Hardware wallets: `}
          <a
            href="https://www.ledger.com/"
            className="main__answer-link"
          >
            Ledger
          </a>
          {` or `}
          <a
            href="https://trezor.io/"
            className="main__answer-link"
          >
            Trezor
          </a>
        </li>
        <li className="main__recommended-walets-item">
          {`Desktop: `}
          <a
            href="https://electrum.org/#home"
            className="main__answer-link"
          >
            Electrum
          </a>
          {` (для страниц BTC) / `}
          <a
            href="https://metamask.io/"
            className="main__answer-link"
          >
            Metamask
          </a>
          {` (для страниц ETH)`}
        </li>
      </ul>
    </div>
    <label className="main__question">
      <input
        type="checkbox"
        className="main__question-checkbox"
      />
      How safe is the process of buying Ethereum from your website?
    </label>
    <div className="main__answer main__answer--active">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Rem eos saepe dicta provident eligendi fugit nemo at nihil
      quasi aspernatur libero non sit commodi corrupti dolore
      quod quos voluptatum expedita cumque, sequi dolor nam,
      neque corporis? Consequuntur natus recusandae dolor,
      qui facere modi nesciunt? Eos eum sint excepturi ea blanditiis?
    </div>
  </div>
);
