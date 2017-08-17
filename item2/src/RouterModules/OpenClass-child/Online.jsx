import React from "react";
import $ from "jquery";

export default class Online extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classContent:[]
        }
        this._onContentChange=this._onContentChange.bind(this);
    }
    _onContentChange(newDate){
        this.setState({
            classContent:newDate
        })
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            url:"http://172.168.1.177:3030/classDate.json",
            dataType:"json",
            type:"get",
            success:function(data){
                _this._onContentChange(data);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
    render(){
        var classId=this.props.params.classId;
        var that=this;
        return (
            <div className="cou_online">
                aaa
                {
                    this.state.classContent.map(function(item,index){
                        if(item.id==classId) {
                            console.log(item.courseOnline);
                            item.courseOnline.map(function(item1,index1){
                                console.log(item1.chapter);
                                return (
                                    <dl>
                                        <dt>{item1.chapter}</dt>
                                        {
                                            item1.section.map(function(item2,index2){
                                                console.log(item2.tit);
                                                return (
                                                    <dd key={index2}>{item2.tit}</dd>
                                                )
                                            })
                                        }

                                    </dl>
                                )
                            })
                        }
                    })

                }

            </div>
        )
    }
}