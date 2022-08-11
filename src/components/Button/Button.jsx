import React from 'react';

export const Button = (props) => {
  const { text, onClick, secondaryButton } = props;

  return (
    <button 
      type="submit"
      onClick={onClick}
      className={`w-full h-full box-border font-semibold text-lg rounded ${secondaryButton ? 'bg-slate-700 border-2 text-white' : 'bg-green-400 hover:bg-green-500'}`}
    >
      {text}
    </button>
  );
};
