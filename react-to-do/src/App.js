import React, { Component } from 'react';
import './App.css';
import { ToDo } from './components/ToDo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'walk the cat', isCompleted: true },
        { description: 'throw the dishes away', isCompleted: false },
        { description: 'buy new dishes', isCompleted: false },
      ],
      newToDoDescription: '',
    };
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  deleteToDo(id) {
    const { todos } = this.state;
    const filteredTodos = todos.filter((e, index) => index !== id);
    console.log(JSON.stringify(filteredTodos));
    this.setState({ todos: filteredTodos });
  }

  handleChange(e) {
    this.setState({ newToDoDescription: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newToDoDescription) { return; }
    const newToDo = { description: this.state.newToDoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newToDo], newToDoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = !todo.isCompleted;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map((todo, index) =>
            (<ToDo
              key={index}
              description={todo.description}
              isCompleted={todo.isCompleted}
              todoId={index}
              toggleComplete={() => this.toggleComplete(index)}
              deleteToDo={this.deleteToDo}
            />))}
        </ul>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.state.newToDoDescription} onChange={e => this.handleChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
