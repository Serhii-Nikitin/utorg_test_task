import PropTypes from 'prop-types';

export const AnswerType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  recomandation: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export const ContentType = {
  question: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  answer: PropTypes.shape(AnswerType).isRequired,
};

export const SectionType = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape(ContentType).isRequired,
  ).isRequired,
};
