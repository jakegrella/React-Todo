import React, { Component } from 'react';

class Todo extends Component {
	handleClick = () => {
		this.props.handleToggleTodo(this.props.todo.id);
	};

	render() {
		return (
			<>
				<div
					onClick={this.handleClick}
					className={`todo ${this.props.todo.completed ? `completed` : ''}`}
				>
					<p>{this.props.todo.task}</p>
				</div>
			</>
		);
	}
}

export default Todo;
