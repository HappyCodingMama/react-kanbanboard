import React, { useState } from 'react';
import './home.scss';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from '../../components/list/List';
import data from '../../utils/sample';
import InputContainer from '../../components/inputcontainer/InputContainer';

const Home = () => {
  const [lists, setLists] = useState(data.lists);

  return (
    <div className='home-container'>
      <DragDropContext>
        <Droppable droppableId='app' type='list' direction='horizontal'>
          {(provided) => (
            <div className='home-wrapper' ref={provided.innerRef}>
              {lists.map((list, index) => {
                return <List list={list} key={list.id} index={index} />;
              })}
              <div>
                <InputContainer type='list' />
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Home;
