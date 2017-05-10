import "./component/base.css";

import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter , Route, Link} from "react-router-dom";

import AppRouter from "./AppRouter/appRouter"

// import HomePage from "./component/home/homePage";

// import ThePage1 from "./component/page1/page1";
// import ThePage2 from "./component/page2/page2";
// import ThePage3 from "./component/page3/page3";

// class AppRouter extends Component{
// 	constructor(props){
// 		super(props);
// 	};
// 	render(){
// 		return (
// 			<HashRouter>
// 				<div>
// 					<Route exact path="/" component={HomePage}/>
// 					<Route exact path="/page1" component={ThePage1}/>
// 					<Route exact path="/page2" component={ThePage2}/>
// 					<Route exact path="/page3" component={ThePage3}/>
// 				</div>
// 			</HashRouter >
// 		);
// 	}
// };


ReactDOM.render(<AppRouter />,document.getElementById("root"));

// import ReactDOM from "react-dom";
// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// const BasicExample = () => (
//   <Router>
//     <div>
//      <ul>
//         <li><Link to="/">首页</Link></li>
//         <li><Link to="/about">关于</Link></li>
//         <li><Link to="/topics">主题列表</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route exact path="/about" component={About}/>
//       <Route exact path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )

// const Home = () => (
//   <div>
//     <h2>首页</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>关于</h2>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>主题列表</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           使用 React 渲染
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           组件
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           属性 v. 状态
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>请选择一个主题。</h3>
//     )}/>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )


// ReactDOM.render(<BasicExample>

// 				</BasicExample >,document.getElementById("root"));
// export default BasicExample