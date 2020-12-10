import React from "react";
import Todo from "./Todo";
import "../App.css";
function TodoList({ todos, toggleComplete, removeTodo }) {
	return (
		<ul className="bg-list list-group list-group-horizontal">
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleComplete={toggleComplete}
					removeTodo={removeTodo}
				/>
			))}
		</ul>
	);
}

export default TodoList;
