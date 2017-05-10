import "./page3.css";

import React, {Component} from "react";
import {Link} from "react-router-dom";

import ThePage1 from "../page1/page1";
import ThePage2 from "../page2/page2";

export default class ThePage3 extends Component{
	render(){
		return(
			<div className="page3">
				This is the page3.
				<Link to="/">go to home</Link>
			{/*	<ThePage2/>

				<br/>
				<Link to="/">go to home</Link>
				*/}
			</div>
		);
	}
}