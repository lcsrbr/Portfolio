import React from 'react';
import gmail from '../../images/icons/gmail.png';

function Gmail() {
  return (
    <a
      href="mailto: 93lucasribeiro@gmail.com"
      target="_blank"
      className="ext"
      rel="noreferrer"
    >
      <img src={gmail} alt="gmail logo" />
    </a>
  );
}

export default Gmail;
