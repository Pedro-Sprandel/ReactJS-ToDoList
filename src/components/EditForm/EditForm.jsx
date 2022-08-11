import React, { useState } from 'react';
import { Button } from '../';

export const EditForm = (props) => {
    const { handleCancel, handleSave, initialValue } = props;

    const [value, setValue] = useState(initialValue);

    return (
        <form className="flex h-10">
            <input className='w-2/3 text-xl rounded mr-4 px-4' value={value} onChange={(e) => setValue(e.target.value)} />
            <div className="w-1/3 flex gap-4">
                <Button text="Save" onClick={() => handleSave(value)} />
                <Button text="Cancel" onClick={handleCancel} secondaryButton />
            </div>
        </form>
    )
}
