import React, { useState } from 'react';
import './card.scss';
import { Draggable } from 'react-beautiful-dnd';
import { RiDeleteBinLine } from 'react-icons/ri';

const Card = ({ card, listId, index }) => {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);

  const handleOnBlur = (cardId) => {
    setOpen((prev) => !prev);
  };
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <div className='card-content'>
            {open ? (
              <input
                type='text'
                className='input-card-title'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleOnBlur(card.id);
                  }
                  return;
                }}
                autoFocus
              />
            ) : (
              <div
                onClick={() => setOpen((prev) => !prev)}
                className='card-title-container'
              >
                <p>{card.title}</p>
                <button className='button-cancel'>
                  <RiDeleteBinLine />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
