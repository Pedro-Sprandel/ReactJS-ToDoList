import React, { useState } from 'react';
import { Button } from '../';

export const EditForm = (props) => {
    const { handleCancel, handleSave, initialValue } = props;

    const [value, setValue] = useState(initialValue);

    return (
        <form className="lg:flex">
            <input className='lg:w-2/3 w-full text-xl rounded lg:mr-4 px-4 py-2 mb-4 lg:mb-0' value={value} onChange={(e) => setValue(e.target.value)} />
            <div className="lg:w-1/3 flex gap-4 h-11">
                <Button text="Save" onClick={() => handleSave(value)} />
                <Button text="Cancel" onClick={handleCancel} secondaryButton />
            </div>
        </form>
    )
}
