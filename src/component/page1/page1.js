import "./page1.css";

import React, {Component} from "react";
import {Link} from "react-router-dom";
import CommonPage from "../common/commonPage";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


export default class ThePage1 extends Component{
	render(){
		return(
			<ReactCSSTransitionGroup
		            transitionName="page"
		            transitionAppear={true}
	                transitionAppearTimeout={8000}
	                transitionEnterTimeout={8000}
	                transitionLeaveTimeout={8000}
		         >
			<div className="page1">
				<CommonPage/>
				This is the page1.
				<br/>
				<Link to="/">go to home</Link>
			</div>
			</ReactCSSTransitionGroup>
		);
	}
}
