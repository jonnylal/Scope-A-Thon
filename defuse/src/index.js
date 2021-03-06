import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";
import NotTodoApp from "./components/NotTodoApp";
import BombApp from "./components/BombApp";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/todo" component={TodoApp} />
				<Route path="/nottodo" component={NotTodoApp} />
				<Route path="/defuse" component={BombApp} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
