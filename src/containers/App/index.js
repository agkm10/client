import React from "react";
import { BrowserRouter,
          Route } from "react-router-dom";
import "./App.css";
import Login from '../LoginPage/index';
import Client from '../Client/index';
import Messages from '../Messages/index';

export default function App(props) {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact component={Login}/>
				<Route path="/client" component={Client}/>
        <Route path="/messages" component={Messages}/>
			</div>
		</BrowserRouter>

	);
}
