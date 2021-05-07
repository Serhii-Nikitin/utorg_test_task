import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section } from '../Section';
import { Nav } from '../Nav';
import { sections } from '../../api/sections';
import { partners } from '../../api/partners';
import './Main.scss';

export const Main = () => {
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([1]);
  const [selectedSectionId, setSelectedSectionId] = useState(0);

  return (
    <main
      className="main"
    >
      <div className="main__top">
        <h1 className="main__title">Frequently asked questions</h1>

        <div className="main__container">
          <Nav
            sections={sections}
            selectedSectionId={selectedSectionId}
            setSelectedSectionId={setSelectedSectionId}
          />
          <div
            className="main__content"
          >
            {sections.map(section => (
              <Section
                key={section.id}
                section={section}
                selectedQuestionIds={selectedQuestionIds}
                setSelectedQuestionIds={setSelectedQuestionIds}
                setSelectedSectionId={setSelectedSectionId}
              />
            ))}
          </div>
        </div>

        <div className="main__info">
          <h2 className="main__info-title">
            Still have questions? Write to us
          </h2>
          <div className="main__info-content">
            {`Our support team is ready to help you `}
            <br />
            {`via `}
            <a href="/" className="main__info-link">live chat</a>
            {` or `}
            <a href="/" className="main__info-link">email</a>
            {` at every step of the way`}
          </div>
        </div>
        <div className="main__info-small-screen">
          <h2 className="main__info-title">
            Still have questions?
            <br />
            Write to us
          </h2>
          <div className="main__info-content">
            {`Our support team is ready to help you via `}
            <a href="/" className="main__info-link">live&nbsp;chat</a>
            {` or `}
            <a href="/" className="main__info-link">email</a>
            {` at every step of the way`}
          </div>
        </div>
      </div>
      <div className="main__bottom">
        <div className="main__partners">
          {partners.map(partner => (
            <img src={partner.src} alt="logo" key={uuidv4()} />
          ))}
        </div>
      </div>
    </main>
  );
};
