import React from 'react';

export const Task = (props) => {
  const { data, handleDelete, onChangeStatus } = props;

  return (
    <div
      onClick={() => onChangeStatus(data.id)} 
      className={`rounded flex items-center justify-between ${data.completed ? 'bg-slate-500' : 'bg-slate-200'} ${!data.completed && 'hover:bg-slate-300'} pl-4 pr-2 py-2 w-full`}
    >
      <div className="flex gap-4 items-baseline text-xl">
        <p>{data.id + 1}</p>
        <p className={data.completed && 'line-through'}>{data.title}</p>
      </div>
      <button 
        className="bg-red-500 rounded px-2 py-1"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(data.id);
        }}>
        Delete
      </button>
    </div>
  )
};
