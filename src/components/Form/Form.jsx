import React, { useState } from 'react';
import { Button } from '../';

export const Form = (props) => {
  const { handleSubmit } = props;

  const [value, setValue] = useState('');

  return (
    <form className="lg:flex">
      <input value={value} onChange={(e) => setValue(e.target.value)} className='lg:w-2/3 w-full text-xl rounded lg:mr-4 px-4 py-2 mb-4 lg:mb-0' />
      <div className="lg:w-1/3 h-11">
        <Button 
          text="Add new task"
          onClick={(e) => {
            handleSubmit(value, e);
            setValue('');
          }}
        />
      </div>
    </form>
  )
}