import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class ThePage2 extends Component{
	render(){
		return(
			<div>
				This is the page2.
				<br/>
				<Link to="/">go to home</Link>
			</div>
		);
	}
}