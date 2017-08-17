import React from "react";
import ListStore from "../../flux/ListStore";

export default class Online extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classList:ListStore.getClassList()
        }
        this._onChange=this._onChange.bind(this);
        this.getOnline=this.getOnline.bind(this);
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
    getOnline(){
        var classId=this.props.params.classId;
        var  classList = this.state.classList;
        var item = classList.filter(function(item){
                return item.id == classId;
        })
        return  item[0].courseOnline;
    }
    render(){
        var courseOnline=this.getOnline();
        return (
            <div className="cou_online">
                {
                    courseOnline.map(function(item,index){
                        return (
                            <dl key={index}>
                                <dt>{item.chapter}</dt>
                                {
                                    item.section.map(function(item1,index1){
                                        return (
                                            <dd key={index1}>{item1.tit}</dd>
                                        )

                                    })
                                }

                            </dl>
                        )
                    })
                }

            </div>
        )
    }
}