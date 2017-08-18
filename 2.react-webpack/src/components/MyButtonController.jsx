import React from "react";
import MyButton from "./MyButton.jsx";

export default class MyButtonController extends React.Component{
    constructor(props){
        super(props);
        this.state={
            item:[1,2,3,4,5]
        }
        this.addNewItem=this.addNewItem.bind(this);
    }
    addNewItem(){
        var newItem=this.state.item.concat("newItem");
        this.setState({
            item:newItem
        })
    }
    render(){
        return (
            <MyButton item={this.state.item} addNewItem={this.addNewItem} />
        )
    }
}