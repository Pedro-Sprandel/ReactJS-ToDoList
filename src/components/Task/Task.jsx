import React from 'react';

export const Task = (props) => {
  const { data, handleEdit, handleDelete, onChangeStatus } = props;

  return (
    <div
      onClick={() => onChangeStatus(data.id)} 
      className={`rounded flex items-center justify-between ${data.completed ? 'bg-slate-500' : 'bg-slate-200'} ${!data.completed && 'hover:bg-slate-300'} pl-4 pr-2 py-2 w-full`}
    >
      <div className="flex gap-4 items-baseline text-xl">
        <p>{data.id + 1}</p>
        <p className={data.completed && 'line-through'}>{data.title}</p>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white font-semibold rounded px-2 py-1 mr-2"
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(data.title);
          }}
        >
          Edit
        </button>
        <button 
          className="bg-red-500 rounded font-semibold px-2 py-1"
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(data.id);
          }}>
          Delete
        </button>
      </div>
    </div>
  )
};
