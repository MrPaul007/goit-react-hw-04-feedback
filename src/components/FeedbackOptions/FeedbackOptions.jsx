import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button type="button" key={option} className="btn" onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FeedbackOptions;