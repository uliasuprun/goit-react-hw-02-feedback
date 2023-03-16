import PropTypes from 'prop-types';
import { NoFeedbackInfo } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <>
      <NoFeedbackInfo>{message}</NoFeedbackInfo>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
