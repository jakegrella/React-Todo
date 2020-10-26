import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
	handleClearClick = () => {
		this.props.handleClearTodos();
	};

	render() {
		// console.log('todos', this.props.todos);
		// console.log('item 1: completed?', this.props.todos[0].completed);
		// console.log('item 2: completed?', this.props.todos[1].completed);
		return (
			<div className='todo-list'>
				<button className='clear-btn' onClick={this.handleClearClick}>
					Clear Completed
				</button>
				{this.props.todos.map((todo) => (
					<Todo
						handleToggleTodo={this.props.handleToggleTodo}
						key={todo.id}
						todo={todo}
					/>
				))}
			</div>
		);
	}
}
export default TodoList;
