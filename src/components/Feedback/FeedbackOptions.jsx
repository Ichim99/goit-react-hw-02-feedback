import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={style.container}> 
        {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
          className={style.button}
        >
            {option}
        </button>
      ))}
      </div>
    );
};   


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};





























