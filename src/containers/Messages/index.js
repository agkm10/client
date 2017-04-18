import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NavBarTop from '../Nav/index'
import "./Messages.css";


export default function Messages( { } ) {


	return (
		<main className="landing">
			<NavBarTop/>
			<h3>Messages Component is Working</h3>
		</main>
	);
}
