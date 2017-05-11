import "./homePage.css";

import React, {Component} from "react";
import {Link} from "react-router-dom";
import CommonPage from "../common/commonPage";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

// const HomePage = ()=>(
// 	<div>
// 		This is the home page
// 		<br/>
// 		<Link to="page1">go to page1</Link>
// 		<br/>
// 		<Link to="/page2">go to page2</Link>
// 		<br/>
// 		<Link to="page3">go to page3</Link>
// 	</div>
// )
// export default HomePage;
var i = 0;
export default class HomePage extends Component{
	constructor(props){
        super(props)
    };
	render(){
		return(  
		   	<ReactCSSTransitionGroup
		            transitionName="page"
		            transitionAppear={true}
	                transitionAppearTimeout={8000}
	                transitionEnterTimeout={8000}
	                transitionLeaveTimeout={8000}
		         >
				<div className="homePage">
					This is the home page....... s
					<br/>
					<Link to="/">go to home</Link>
					<br/>
					<Link to="page1">go to page1</Link>
					<br/>
					<Link to="/page2">go to page2</Link>
					<br/>
					<Link to="page3">go to page3</Link>
				</div>
			</ReactCSSTransitionGroup>
		);
	};
}
