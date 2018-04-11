import React, { Component } from 'react';

export class ToDo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <li>
          <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
          <span>{ this.props.description }</span>
          <button  onClick={ () => this.props.deleteToDo(this.props.todoId) }  />
        </li>
        );
  }
}
