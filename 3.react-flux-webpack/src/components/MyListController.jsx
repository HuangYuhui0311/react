
import React from "react";
import MyList from "./MyList.jsx";
import ListStore from "../store/listStore";
import ListActions from "../actions/listActions";

export default class MyListController extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:ListStore.getList()
        }
        this._onChange=this._onChange.bind(this);
        this._addNewItem=this._addNewItem.bind(this);
        this._deleteLastItem=this._deleteLastItem.bind(this);
    }
    componentDidMount(){
        ListStore.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        ListStore.removeChangeListener(this._onChange);
    }
    _onChange(){
        this.setState({
            list:ListStore.getList()
        })
    }
    _addNewItem(){
        ListActions.addNewItem("new Item");
    }
    _deleteLastItem(){
        ListActions.deleteLastItem();
    }
    render(){
        var items=this.state.list;
        return (
            <MyList items={items} addNewItem={this._addNewItem} deleteLastItem={this._deleteLastItem}/>
        )
    }
}