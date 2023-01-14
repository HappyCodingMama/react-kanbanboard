import React, { useState } from 'react';
import InputCard from '../inputcard/InputCard';
import './inputcontainer.scss';

const InputContainer = ({ listId, type }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='input-container'>
      <button className='openButton' onClick={() => setOpen(!open)}>
        {type === 'card' ? '+ Add Card' : '+ Add List'}
      </button>
      {open && (
        <div className='input-content'>
          <InputCard setOpen={setOpen} listId={listId} type={type} />
        </div>
      )}
    </div>
  );
};

export default InputContainer;
