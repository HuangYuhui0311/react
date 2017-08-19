import React from "react";

export default class Repo extends React.Component{
    _getDivStyle(){
        return{
            background:"#ccc",
            fontSize:"24px",
            color:"red"
        }
    }

    render(){
        var divStyle=this._getDivStyle();
        var {name,classId}=this.props.params;
        return <div style={divStyle}>
                    班级：{name}<br/>
                    编码：{classId}
                </div>

    }
}