import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../App.css";
import bomb from "../bomb.gif";
import { Link } from "react-router-dom";
import Form from "./Form";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodoApp() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (storageTodos) {
			setTodos(storageTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
	}, [todos]);

	function addTodo(todo) {
		setTodos([todo, ...todos]);
	}
	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	function toggleComplete(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	}

	// const todoItems = useMemo(() => {
	// 	return todos.map((item) => {
	// 		return <TodoList title={item.title} description={item.description} />;
	// 	});
	// }, [todos]);

	return (
		<div className="Background">
			<div className="buffer">
				<img src={bomb} alt="bomb" />
			</div>

			<div className="App">
				<h1>You'll have 15 minutes for each todo item</h1>
				<div>
					<Form addTodo={addTodo} />
					<TodoList
						todos={todos}
						toggleComplete={toggleComplete}
						removeTodo={removeTodo}
					/>
				</div>
			</div>
			<div>
				<Link to="/nottodo">
					<button type="button" className="btn btn-danger btn-lg right-btn">
						Next...
					</button>
				</Link>
			</div>
		</div>
	);
}

export default TodoApp;
