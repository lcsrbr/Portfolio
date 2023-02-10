import React from 'react';
import www from '../../images/www.png';

function WebSite({ param }: any) {
  return (
    <a href={param} target="_blank" className="ext" rel="noreferrer">
      <img src={www} alt="webSite logo" />
    </a>
  );
}

export default WebSite;
