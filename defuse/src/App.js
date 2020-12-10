import React from "react";
import bomb from "./bomb.gif";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="container">
					<h1>Defuse</h1>
					<div className="App-logo">
						<img src={bomb} alt="bomb" />
					</div>
				</div>
				<button type="button" class="btn btn-danger btn-lg">
					Get started now or else...
				</button>
			</header>
		</div>
	);
}

export default App;
