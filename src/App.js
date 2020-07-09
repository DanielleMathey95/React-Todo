import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Code with React',
    id: 1528817084357,
    completed: false
  }
];

class App extends React.Component {
  
  constructor() {
    super();
    this.state={tasks};
  }

  addTask = (event, task) => {
    event.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  };

  toggleComplete = taskId => {
    this.setState({
      tasks: this.setState.tasks.map(task =>{
        if(taskID === task.id) {
          return {
            ...task, 
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    });
  };

  render() { 
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
