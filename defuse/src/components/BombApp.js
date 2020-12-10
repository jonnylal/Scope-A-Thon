import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../App.css";
import bomb from "../bomb.gif";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import Form from "./Form";
import TodoList from "./TodoList";

function BombApp() {
	return (
		<div className="Background">
			<div className="buffer">
				<img src={bomb} alt="bomb" />
			</div>

			<div className="App">
				<h1>Just do it!</h1>
				<Countdown date={Date.now() + 900000} />
			</div>
		</div>
	);
}

export default BombApp;
