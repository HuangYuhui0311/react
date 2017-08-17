import React from "react";
import {Link} from "react-router";

export default class AboutNavLink extends React.Component{
    render(){
        return <Link {...this.props} activeClassName="aboutActive"/>
    }
}