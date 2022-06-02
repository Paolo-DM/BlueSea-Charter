import React from 'react';
import './SectionsDivider.css';

function SectionsDivider(props) {
  return (
    <div>
      <h1 className="text-center divider-text">{props.text}</h1>
    </div>
  );
}

export default SectionsDivider;
