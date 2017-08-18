import React from "react";

export default class MyChild extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checked:true
        };
        this._onChildChange=this._onChildChange.bind(this);
    }
    _onChildChange(){
        var newChecked=!this.state.checked;
        this.setState({
            checked:newChecked
        });
        this.props.onParentChange(newChecked);
    }
    render(){
        var text=this.props.text;
        var checked=this.state.checked;
        return (
            <div>
                {text}
                <label><input type="checkbox" onChange={this._onChildChange} defaultChecked={checked}/></label>
            </div>
        )
    }

}