import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => {
    return (
      <button
        className={css.feedback__btn}
        key={option}
        id={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    );
  });
};

FeedbackOptions.ptopTypes = {
  option: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
