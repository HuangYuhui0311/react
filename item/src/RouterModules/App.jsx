import React from "react";
import NavLink from "./NavLink.jsx";

export default class App extends React.Component{
    render(){
        return (
            <div className="body">
                <div className="nav clear">
                    <div className="logo">
                        <NavLink to="/"><img src="img/logo.jpg" alt=""/></NavLink>
                    </div>
                    <ul className="clear">
                        <li><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
                        <li><NavLink to="/aboutUs">关于我们</NavLink></li>
                        <li><NavLink to="/openClass">大咖公开课</NavLink></li>
                        <li><NavLink to="/employmentClass">明星之路就业班</NavLink></li>
                        <li><NavLink to="/teachers">名师动态</NavLink></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}