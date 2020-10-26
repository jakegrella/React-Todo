import React, { Component } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './style.css';

const todos = [];

class App extends Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			todos: todos,
		};
	}

	handleToggleTodo = (todoId) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === todoId) {
					return {
						...todo,
						completed: !todo.completed,
					};
				} else return todo;
			}),
		});
	};

	handleAddTodo = (todo) => {
		this.setState({
			todos: [
				...this.state.todos,
				{
					task: todo,
					id: Date.now(),
					completed: false,
				},
			],
		});
	};

	handleClearTodos = () => {
		this.setState({
			todos: this.state.todos.filter((todo) => !todo.completed),
		});
		console.log('todos after clear', todos);
	};

	render() {
		return (
			<>
				<h1>Todo List</h1>
				<TodoForm handleAddTodo={this.handleAddTodo} />
				<TodoList
					handleClearTodos={this.handleClearTodos}
					handleToggleTodo={this.handleToggleTodo}
					todos={this.state.todos}
				/>
			</>
		);
	}
}

export default App;
