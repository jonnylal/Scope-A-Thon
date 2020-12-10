import React from "react";
import "../App.css";

function Todo({ todo, toggleComplete, removeTodo }) {
	function handleCheckboxClick() {
		toggleComplete(todo.id);
	}

	function handleRemoveClick() {
		removeTodo(todo.id);
	}

	return (
		<div>
			{/* <input type="checkbox" onClick={handleCheckboxClick} /> */}

			<button className="btn btn-outline-danger" onClick={handleRemoveClick}>
				<li>{todo.task}</li>
			</button>
		</div>
	);
}

export default Todo;
