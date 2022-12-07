import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <h3 className={css.title}>{message}</h3>;
};

Notification.propTypes = {
  title: PropTypes.string,
};
