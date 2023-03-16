import { ButtonFeedback, ButtonWrapper } from './FeedbackOption.styled';
import PropTypes from 'prop-types';

const FeedbackOption = ({ option, onLeaveFeedback }) => {
  return (
    <>
      <ButtonWrapper>
        {option.map(el => (
          <ButtonFeedback key={el} type="button" onClick={onLeaveFeedback}>
            {el}
          </ButtonFeedback>
        ))}
      </ButtonWrapper>
    </>
  );
};

FeedbackOption.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
