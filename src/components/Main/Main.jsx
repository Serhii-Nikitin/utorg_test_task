import React from 'react';
import { GeneralQuestios } from '../GeneralQuestions';
import { Nav } from '../Nav';
import './Main.scss';

export const Main = () => (
  <main className="main">
    <h1 className="main__title">Frequently asked questions</h1>

    <div className="main__container">
      <Nav />
      <div className="main__content">
        <GeneralQuestios />
        <div className="main__section">
          <h2 className="main__subtitle">Payment questions</h2>
        </div>
        <div className="main__section">
          <h2 className="main__subtitle">Transaction</h2>
        </div>
        <div className="main__section">
          <h2 className="main__subtitle">Verification</h2>
        </div>
      </div>
    </div>
  </main>
);
