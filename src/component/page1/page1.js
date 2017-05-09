import React, {Component} from "react";
import {Link} from "react-router-dom";
import CommonPage from "../common/commonPage";


export default class ThePage1 extends Component{
	render(){
		return(
			<div>
				<CommonPage/>
				This is the page1.
				<br/>
				<Link to="/">go to home</Link>
			</div>
		);
	}
}
