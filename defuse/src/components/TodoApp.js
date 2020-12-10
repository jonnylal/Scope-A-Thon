import React, { useState, useCallback, useMemo } from "react";
import "../App.css";
import bomb from "../bomb.gif";
import { Link } from "react-router-dom";
import Form from "./Form";
import TodoList from "./TodoList";

function TodoApp() {
	const [todos, setTodos] = useState([]);

	function addTodo(todo) {
		setTodos([todo, ...todos]);
	}

	const todoItems = useMemo(() => {
		return todos.map((item) => {
			return <TodoList title={item.title} description={item.description} />;
		});
	}, [todos]);

	return (
		<div className="Background">
			<div className="buffer">
				<img src={bomb} alt="bomb" />
			</div>

			<div className="App">
				<h1>You'll have 15 minutes for each todo item</h1>
				<div>
					<Form addTodo={addTodo} />
					<TodoList todos={todos} />
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
