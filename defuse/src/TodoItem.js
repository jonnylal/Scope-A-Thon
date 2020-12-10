import React from "react";

function TodoItem(props) {
	return (
		<div className="item">
			<h2>{props.title}</h2>
			<h3>{props.description}</h3>
			<button onClick={props.handleClick}>Add to Cart</button>
		</div>
	);
}

export default TodoItem;
