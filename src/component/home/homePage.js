import React, {Component} from "react";
import {Link} from "react-router-dom";
import CommonPage from "../common/commonPage";


export default class HomePage extends Component{
	render(){
		return( 
			<div>
				This is the home page....... s
				<br/>
				<Link to="page1">go to page1</Link>
				<br/>
				<Link to="/page2">go to page2</Link>
				<br/>
				<Link to="page3">go to page3</Link>
			</div>
		);
	}
}
