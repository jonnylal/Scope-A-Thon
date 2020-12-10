import React from "react";

function Todo({ todo }) {
	return (
		<div>
			<li>{todo.task}</li>
		</div>
	);
}

export default Todo;
