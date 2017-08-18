import React from "react";
import MyChild from "./MyChild.jsx";

export default class MyParent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg : "yes"
        };
        this._onParentChange=this._onParentChange.bind(this);
    }
    _onParentChange(newMsg){
        var newMsg=newMsg?"yes":"no";
        this.setState({
            msg:newMsg
        });
    }
    render(){
        var msg=this.state.msg;
        return (
            <div>
                您当前选择的是{msg}
                <MyChild text="请选择" onParentChange={this._onParentChange}/>
            </div>
        )
    }
}