import React, { Component } from "react";

export default class Toggle extends Component {
	state = {
		Todo: false,
		NotTodo: false,
		Timer: false,
	};

	toggle = () => {
		this.setState({
			on: !this.state.on,
		});
	};

	render() {
		return (
			<div>
				{this.state.on && <h1>Toggle</h1>}
				<button onClick={this.toggle}>Show/Hide</button>
			</div>
		);
	}
}
