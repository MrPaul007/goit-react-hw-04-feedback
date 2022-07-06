import PropTypes from "prop-types";

function Statistic( {good, neutral, bad, total, positivePercentage } ) {
  return (
    <>
        <p className="statItem">Good: {good}</p>
        <p className="statItem">Neutral: {neutral}</p>
        <p className="statItem">Bad: {bad}</p>
        <p className="statItem">Total: {total}</p>
        <p className="statItem">Positive feedback: {positivePercentage}%</p>
    </>
  )  
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistic;