import React from 'react';

export const Button = (props) => {
  const { text, onClick } = props;

  return (
    <button type="submit" onClick={onClick} className="w-full h-full rounded bg-green-600 hover:bg-green-700">
      {text}
    </button>
  );
};
