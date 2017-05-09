import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter , Route, Link} from "react-router-dom";

import HomePage from "./component/home/homePage";

import ThePage1 from "./component/page1/page1";
import ThePage2 from "./component/page2/page2";
import ThePage3 from "./component/page3/page3";

const getConfirmation = () => {
  // window.confirm('Are you sure?')
}


ReactDOM.render(<HashRouter  
				
				    >
					<div>
						<Route exact path="/" component={HomePage}/>
						<Route exact path="/page1" component={ThePage1}/>
						<Route exact path="/page2" component={ThePage2}/>
						<Route exact path="/page3" component={ThePage3}/>
					</div>

				</HashRouter >,document.getElementById("root"));