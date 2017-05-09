import React, {Component} from "react";

import ThePage1 from "../page1/page1";
import ThePage2 from "../page2/page2";

export default class ThePage3 extends Component{
	render(){
		return(
			<div>
				This is the page3.

				<ThePage2/>
			</div>
		);
	}
}