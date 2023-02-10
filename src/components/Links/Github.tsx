import React from 'react';
import github from '../../images/github.png';

function Github({ param = 'https://github.com/lcsrbr' }: any) {
  return (
    <a href={param} target="_blank" className="ext" rel="noreferrer">
      <img src={github} alt="github logo" />
    </a>
  );
}

export default Github;
