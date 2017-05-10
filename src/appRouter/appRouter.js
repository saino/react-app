import React, {Component} from "react";

import {BrowserRouter , Route, Link} from "react-router-dom";

// import {HomePage, ThePage1, ThePage2, ThePage3} from "../component/";

import HomePage from "../component/home/homePage";
import ThePage1 from "../component/page1/page1";
import ThePage2 from "../component/page2/page2";
import ThePage3 from "../component/page3/page3";

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
		return (
			<BrowserRouter >
				<div id="app">
					<Route exact path="/" component={HomePage} />
					<Route exact path="/page1" component={ThePage1}/>
					<Route exact path="/page2" component={ThePage2}/>
					<Route exact path="/page3" component={ThePage3}/>
			{/*		<div style={styles.content}>
			          <ReactCSSTransitionGroup
			            transitionName="fade"
			            transitionEnterTimeout={300}
			            transitionLeaveTimeout={300}
			          >*/}
			            {/* 
			                这里和使用 ReactCSSTransitionGroup 没有区别，
			                唯一需要注意的是要把你的地址（location）传入
			                「Route」里使它可以在动画切换的时候匹配之前的
			                地址。
			            */}
			            {/* 
			            <Route
			              location={location}
			              key={location.key}
			              path="/:h/:s/:l"
			              component={HSL}
			            />
			          </ReactCSSTransitionGroup>
			        </div>
			*/}
				</div>
			</BrowserRouter  >
		);
	}
}