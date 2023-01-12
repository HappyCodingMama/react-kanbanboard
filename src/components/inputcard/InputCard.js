import React, { useState } from 'react';
import './inputcard.scss';
import { RiDeleteBinLine } from 'react-icons/ri';

const InputCard = ({ setOpen, listId, type }) => {
  const [title, setTitle] = useState('');
  return (
    <div className='input-card-container'>
      <div className='input-card-wrapper'>
        <textarea
          className='input-text'
          placeholder={type === 'card' ? 'Enter a title' : 'Enter list title'}
          autoFocus
        />
      </div>
      <div className='confirm'>
        <button className='button-confirm'>
          {type === 'card' ? 'Add' : 'Add Your List'}
        </button>
        <button className='button-cancel'>
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default InputCard;
