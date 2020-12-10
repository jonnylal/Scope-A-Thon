import React from "react";
import bomb from "./bomb.gif";
import "./App.css";
import { Link } from "react-router-dom";

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
				<Link to="/todo">
					<button type="button" class="btn btn-danger btn-lg">
						Get started now or else...
					</button>
				</Link>
			</header>
		</div>
	);
}

export default App;
