import PropTypes from 'prop-types';
import { StatisticWrapper, StatisticValue } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticWrapper>
        <StatisticValue>Good: {good}</StatisticValue>
        <StatisticValue>Neutral: {neutral}</StatisticValue>
        <StatisticValue>Bad: {bad}</StatisticValue>
        <StatisticValue>Total: {total}</StatisticValue>
        <StatisticValue>
          Positive feedback: {positivePercentage}%
        </StatisticValue>
      </StatisticWrapper>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
