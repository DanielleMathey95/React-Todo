import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log("TodoList JS", props);

  return (
    <div className="Task">
      {props.tasks.map(task => (
        <Todo key={task.id}
          task={task}
          toggleComplete={props.toggleComplete} />
      ))}
        <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;