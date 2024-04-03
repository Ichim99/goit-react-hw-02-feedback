import style from './FeedbackOptions.module.css';
import propTypes from 'prop-types';
import React from "react";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={style.container}> 
        {Object.keys(options).map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={style.button}
        >
            {option}
        </button>
      ))}
      </div>
    );
};   


FeedbackOptions.propTypes = {
    options: propTypes.object.isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};





























