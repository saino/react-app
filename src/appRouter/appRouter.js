import React, {Component} from "react";

import {HashRouter , Route, Link} from "react-router-dom";

// var CSSTransitionGroup = require('react-addons-css-transition-group');
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import {HomePage, ThePage1, ThePage2, ThePage3} from "../component/";

// import HomePage from "../component/home/homePage";
// import ThePage1 from "../component/page1/page1";
// import ThePage2 from "../component/page2/page2";
// import ThePage3 from "../component/page3/page3";

// export default class AppRouter extends Component{
// 	render(){
// 		return (
// 			<div>
// 				asdfafds
// 				<HomePage />
// 			</div >
// 		);
// 	}
// }
export default class AppRouter extends Component{
	constructor(props){
		super(props);
	};
	render(){
		console.log(this.props)
		return (
			<HashRouter>
				<div id="app">
					
						<HomePage>
							<Route exact path="/page1" component={ThePage1}/>
							<Route exact path="/page2" component={ThePage2}/>
							<Route exact path="/page3" component={ThePage3}/>
						</HomePage>
					
			        {/*

			            <Route exact path="/" component={HomePage} />
						<Route exact path="/page1" component={ThePage1}/>
						<Route exact path="/page2" component={ThePage2}/>
						<Route exact path="/page3" component={ThePage3}/>
			        */}
					{/*	
			        <ReactCSSTransitionGroup
			            transitionName="page"
			            transitionAppear={true}
		                transitionAppearTimeout={8000}
		                transitionEnterTimeout={8000}
		                transitionLeaveTimeout={8000}
			         >
						<Route exact path="/" component={HomePage} />
						<Route exact path="/page1" component={ThePage1}/>
						<Route exact path="/page2" component={ThePage2}/>
						<Route exact path="/page3" component={ThePage3}/>
					</ReactCSSTransitionGroup>
					*/}	
					{/*
					<ReactCSSTransitionGroup
			            transitionName="page"
			            transitionAppear={true}
		                transitionAppearTimeout={800}
		                transitionEnterTimeout={800}
		                transitionLeaveTimeout={800}
			         >
						<Route exact path="/" component={HomePage} />
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
			            transitionName="page"
			            transitionAppear={true}
		                transitionAppearTimeout={800}
		                transitionEnterTimeout={800}
		                transitionLeaveTimeout={800}
			         >
						<Route exact path="/page1" component={ThePage1}/>
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
			            transitionName="page"
			            transitionAppear={true}
		                transitionAppearTimeout={800}
		                transitionEnterTimeout={800}
		                transitionLeaveTimeout={800}
			         >>
						<Route exact path="/page2" component={ThePage2}/>
					</ReactCSSTransitionGroup>
					<ReactCSSTransitionGroup
			            transitionName="page"
			            transitionAppear={true}
		                transitionAppearTimeout={800}
		                transitionEnterTimeout={800}
		                transitionLeaveTimeout={800}
			         >
						<Route exact path="/page3" component={ThePage3}/>
					</ReactCSSTransitionGroup>
					*/}
				</div>
			</HashRouter>
		);
	}
}