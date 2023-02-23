import React from 'react';
import linkedin from '../../images/icons/linkedin.svg';

function Linkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/lucas-moura-ab1b89bb"
      target="_blank"
      className="ext"
      rel="noreferrer"
    >
      <img src={linkedin} alt="linkedin logo" />
    </a>
  );
}

export default Linkedin;
