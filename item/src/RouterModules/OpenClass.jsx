import React from "react";
import ListStore from "../flux/ListStore";
import ListAction from "../flux/ListAction";
export default class OpenClass extends React.Component{
    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
}
