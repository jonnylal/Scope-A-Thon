import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../App.css";
import bomb from "../bomb.gif";
import { Link } from "react-router-dom";
import Form from "./Form";
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodoApp() {
	const [todos, setTodos] = useState([]);
	const [notTodos, setNotTodos] = useState([]);

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

	function addNotTodo(notTodo) {
		setTodos([notTodo, ...notTodos]);
	}
	function removeNotTodo(id) {
		setTodos(notTodos.filter((notTodo) => notTodo.id !== id));
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

	function ViewControl(viewState) {
		switch (viewState) {
			case "todo":
				return (
					<div>
						<h1>You'll have 15 minutes for each todo item</h1>

						<Form addTodo={addTodo} />
						<TodoList
							todos={todos}
							toggleComplete={toggleComplete}
							removeTodo={removeTodo}
						/>
					</div>
				);
			case "notTodo":
				return (
					<div>
						<h1>Now what not to do...</h1>

						<Form addTodo={addNotTodo} />
						<TodoList
							todos={notTodos}
							toggleComplete={toggleComplete}
							removeTodo={removeNotTodo}
						/>
						<TodoList
							todos={todos}
							toggleComplete={toggleComplete}
							removeTodo={removeTodo}
						/>
					</div>
				);
			default:
				return null;
		}
	}

	var viewState = "todo";

	return (
		<div className="Background">
			<div className="buffer">
				<img src={bomb} alt="bomb" />
			</div>

			<div className="App">{ViewControl(viewState)}</div>
			<div>
				<button
					type="button"
					onClick={(viewState = "nottodo")}
					className="btn btn-danger btn-lg right-btn"
				>
					Next...
				</button>
			</div>
		</div>
	);
}

export default TodoApp;
