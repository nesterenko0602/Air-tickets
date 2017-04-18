import React from 'react';
import './button.css';

export default (props) => {
  const types = (props.type || '')
    .split(',')
    .map(type => type && `button--${type.trim()}`)
    .join(' ');

  return (
    <button className={'button ' + types}>
      <span className="button__text">{props.text}</span>
      <span className="button__subtext">{props.subtext}</span>
    </button>
  );
};
