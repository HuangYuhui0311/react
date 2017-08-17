import React from "react";
import AboutNavLink from "./ModuleAbout/AboutNavLink.jsx";

export default class AboutUs extends React.Component{
    render(){
        return (
            <div className="bd02 content clear">
                <ul className="aboutL">
                    <li><AboutNavLink to="/aboutUs" onlyActiveOnIndex>关于我们</AboutNavLink></li>
                    <li><AboutNavLink to="/JoinUs">加入我们</AboutNavLink></li>
                    <li><AboutNavLink to="/Learn">学习攻略</AboutNavLink></li>
                    <li><AboutNavLink to="/Server">服务条款</AboutNavLink></li>
                    <li><AboutNavLink to="/UserKnow">用户须知</AboutNavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}