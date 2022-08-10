import React, { useState } from 'react';
import { Button } from '../';

export const Form = (props) => {
  const { handleSubmit } = props;

  const [value, setValue] = useState('');

  return (
    <div className="flex h-10">
      <input value={value} onChange={(e) => setValue(e.target.value)} className='w-2/3 text-xl rounded mr-4 px-4' />
      <div className="w-1/3">
        <Button text="Add new task" onClick={() => handleSubmit(value)} />
      </div>
    </div>
  )
}