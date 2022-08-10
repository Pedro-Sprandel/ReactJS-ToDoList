import React from 'react';

export const Task = (props) => {
  const { data } = props;

  return (
    <div className="rounded flex gap-4 items-center bg-slate-200 px-8 py-2 w-full">
      <p>{data.id + 1}</p>
      <p className="text-xl">{data.title}</p>
    </div>
  )
};
