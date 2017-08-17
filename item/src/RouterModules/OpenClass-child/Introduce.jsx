import React from "react";
import ListStore from "../../flux/ListStore";

export default class Introduce extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classList:ListStore.getClassList()
        }
        this._onChange=this._onChange.bind(this);
        this.getIntroduce=this.getIntroduce.bind(this);
    }
    componentDidMount(){
        ListStore.addChangeListener(this._onChange)
    }
    componentWillUnmount(){
        ListStore.removeChangeListener(this._onChange)
    }
    _onChange(){
        this.setState({
            classList : ListStore.getClassList()
        })
    }
    getIntroduce(){
        var classId=this.props.params.classId;
        return this.state.classList.map(function(item,index){
            if(item.id==classId){
                return item.introduce;
            }
        });
    }
    render(){
        var introduce=this.getIntroduce();
        console.log(introduce)
        return (
            <div className="cou_intro">
                {introduce}
            </div>
        )
    }
}