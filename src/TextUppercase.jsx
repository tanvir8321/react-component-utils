import React from 'react';

const TextUppercase = ({ text }) => {
  const transformText = () => {
    if (text && typeof text === 'string') {
      return text.toUpperCase();
    }
    return '';
  };

  return <div>{transformText()}</div>;
};

export default TextUppercase;
