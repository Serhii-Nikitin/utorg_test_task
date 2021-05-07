import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';
import { SectionType } from '../../Types';

export const Nav = ({ sections, setSelectedSectionId, selectedSectionId }) => (
  <nav className="nav">
    <ul className="nav__list">
      {sections.map(section => (
        <li
          key={section.id}
          className="nav__item"
        >
          <a
            href={`#${section.id}`}
            className={selectedSectionId === section.id
              ? 'nav__link nav__link--active'
              : 'nav__link'
            }
            onClick={() => setSelectedSectionId(section.id)}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape(SectionType).isRequired,
  ).isRequired,
  setSelectedSectionId: PropTypes.func.isRequired,
  selectedSectionId: PropTypes.number.isRequired,
};
