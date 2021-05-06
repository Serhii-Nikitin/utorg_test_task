import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Section = ({
  section,
  selectedQuestionId,
  setSelectedQuestionId,
}) => {
  const handleSelect = (id) => {
    if (selectedQuestionId === id) {
      setSelectedQuestionId(0);
    } else {
      setSelectedQuestionId(id);
    }
  };

  return (
    <div className="main__section">
      <h2 className="main__subtitle">{section.title}</h2>
      <ul className="main__questions-list">
        {section.content.map(item => (
          <Fragment key={item.id}>
            <li
              role="presentation"
              className="main__questions-item"
              onKeyDown={() => {}}
              onClick={() => handleSelect(item.id)}
            >
              <h3 className="main__question">{item.question}</h3>
              <div
                className={selectedQuestionId === item.id
                  ? 'main__question-toggler'
                  : 'main__question-rotate-toggler'
                }
              />
            </li>
            {/* main__answer--active */}
            {selectedQuestionId === item.id
              ? (
                <div className="main__answer">
                  <p>{item.answer.title}</p>
                  <ul className="main__wallets-list">
                    {item.answer.body.map(part => (
                      <li
                        className="main__wallets-item"
                        key={uuidv4()}
                      >
                        {part}
                      </li>
                    ))}
                  </ul>
                  <ul className="main__recommended-walets-list">
                    {item.answer.recomandation.map(el => (
                      <li
                        key={uuidv4()}
                        className="main__recommended-walets-item"
                        dangerouslySetInnerHTML={{ __html: el }}
                      />
                    ))}
                  </ul>
                </div>
              ) : ''
            }
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

Section.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        answer: PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
          recomandation: PropTypes.arrayOf(
            PropTypes.string.isRequired,
          ).isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  selectedQuestionId: PropTypes.number.isRequired,
  setSelectedQuestionId: PropTypes.func.isRequired,
};
