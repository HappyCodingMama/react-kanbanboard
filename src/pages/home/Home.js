import React, { useState } from 'react';
import './home.scss';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import sample from '../../utils/sample';

const Home = () => {
  const [lists, setLists] = useState([sample.lists]);

  return (
    <div className='home-container'>
      <DragDropContext>
        <Droppable droppableId='app' type='list' direction='horizontal'>
          {(provided) => (
            <div className='home-wrapper' ref={provided.innerRef}>
              {lists.map((list, index) => {
                return;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Home;
