import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, children: { contentTitle, content, timeSeconds } } = props;
  setTimeout(() => hideComponent(),  timeSeconds * 1000);
  return (
    <div className="Alert">
      <h1>{contentTitle}</h1>
      <p>{content}</p>
    </div>
  )
}

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({
    content: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number.isRequired,
  })
}

Alert.defaultProps = {
  children: {
    title: "Algum título",
    content: "Algum conteúdo",
    timeSeconds: 3,
  }
}

export default Alert;
