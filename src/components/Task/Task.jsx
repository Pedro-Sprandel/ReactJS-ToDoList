import React from 'react';

export const Task = (props) => {
  const { data, handleDelete } = props;

  return (
    <div className="rounded flex items-center justify-between bg-slate-200 pl-4 pr-2 py-2 w-full">
      <div className="flex gap-4 items-baseline text-xl">
        <p>{data.id + 1}</p>
        <p>{data.title}</p>
      </div>
      <button className="bg-red-500 rounded px-2 py-1" onClick={() => handleDelete(data.id)}>Delete</button>
    </div>
  )
};
