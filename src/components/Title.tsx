import React from 'react';

const Title = ({ text }: { text: string }) => {
  return <h3 data-testid="title-text">{text}</h3>;
};

export default Title;
