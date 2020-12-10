import React from "react";
import bomb from "./bomb.gif";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="Background">
				<div className="container-fluid">
					<h1>Defuse</h1>
					<div className="buffer">
						<img src={bomb} alt="bomb" />
					</div>
				</div>
				<Link to="/todo">
					<button type="button" className="btn btn-danger btn-lg">
						Get started now or else...
					</button>
				</Link>
			</header>
		</div>
	);
}

export default App;
