import PropTypes from 'prop-types';
import style from './Statistics.module.css';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className={style.container}>    
      <h1 className={style.title}>Statistics</h1>
      <ul className={style.list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  
  );

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };