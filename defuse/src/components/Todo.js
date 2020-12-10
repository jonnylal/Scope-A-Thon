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
			<li className="bg-list">{todo.task}</li>
			<button className="btn btn-outline-danger" onClick={handleRemoveClick}>
				Remove
			</button>
		</div>
	);
}

export default Todo;
