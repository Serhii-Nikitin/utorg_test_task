import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { SectionType } from '../../Types';
import './Section.scss';

export const Section = ({
  section,
  selectedQuestionIds,
  setSelectedQuestionIds,
  setSelectedSectionId,
}) => {
  const handleSelect = (id) => {
    if (selectedQuestionIds.includes(id)) {
      const updatedSelectedQuestionIds = selectedQuestionIds
        .filter(item => item !== id);

      setSelectedQuestionIds(updatedSelectedQuestionIds);
    } else {
      setSelectedQuestionIds(current => [
        ...current,
        id,
      ]);
    }
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 0 && window.scrollY < 1250) {
      setSelectedSectionId(25);
    }

    if (window.scrollY > 1250 && window.scrollY < 2000) {
      setSelectedSectionId(26);
    }

    if (window.scrollY > 2000 && window.scrollY < 2450) {
      setSelectedSectionId(27);
    }

    if (window.scrollY > 2450) {
      setSelectedSectionId(28);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => (
      window.removeEventListener('scroll', listenScrollEvent)
    );
  }, []);

  return (
    <section
      className="main__section section"
      id={`${section.id}`}
    >
      <h2
        className="section__subtitle"
      >
        {section.title}
      </h2>
      <ul className="section__questions-list">
        {section.content.map(item => (
          <Fragment key={item.id}>
            <li
              role="presentation"
              className="section__questions-item"
              onKeyDown={() => {}}
              onClick={() => handleSelect(item.id)}
            >
              <h3 className="section__question">{item.question}</h3>
              <div
                className={selectedQuestionIds.includes(item.id)
                  ? 'section__question-toggler'
                  : 'section__question-rotate-toggler'
                }
              />
            </li>
            {selectedQuestionIds.includes(item.id) && (
              <div className="section__answer">
                <p>{item.answer.title}</p>
                <ul className="section__wallets-list">
                  {item.answer.body.map(part => (
                    <li
                      className="section__wallets-item"
                      key={uuidv4()}
                    >
                      {part}
                    </li>
                  ))}
                </ul>
                <ul className="section__recommended-walets-list">
                  {item.answer.recomandation.map(el => (
                    <li
                      key={uuidv4()}
                      className="section__recommended-walets-item"
                      dangerouslySetInnerHTML={{ __html: el }}
                    />
                  ))}
                </ul>
              </div>
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

Section.propTypes = {
  section: PropTypes.shape(SectionType).isRequired,
  selectedQuestionIds: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  setSelectedQuestionIds: PropTypes.func.isRequired,
  setSelectedSectionId: PropTypes.func.isRequired,
};
