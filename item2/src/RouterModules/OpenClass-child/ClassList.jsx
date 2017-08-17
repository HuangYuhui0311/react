import React from "react";
import {Link} from "react-router";
import $ from "jquery";

export default class OpenClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classList:[]
        }
        this._onChange=this._onChange.bind(this);
    }
    _onChange(newDate){
        this.setState({
            classList:newDate
        })
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            url:"http://172.168.1.177:3030/classDate.json",
            dataType:"json",
            type:"get",
            success:function(data){
                _this._onChange(data);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
    render(){
        return (
            <div className="bd03 content">
                <p><Link to="/">首页</Link> > 点师课堂 > 大咖公开课</p>
                <div className="classL">
                    <ul className="clear">
                        {
                            this.state.classList.map(function(item,index){
                                return (
                                    <li key={index}>
                                        <Link to={"/openClass/"+item.id}>
                                            <img src={"../../img/"+item.imgSrc} alt=""/>
                                            <div className="dec">
                                                <p className="title">{item.title}</p>
                                                <p className="tips clear"><span className="tL">{item.person}人学习</span><span className="tR"><i>免费</i><s>￥{item.price}</s></span></p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="classR">
                    <img src="../../img/class_ad.jpg" alt=""/>
                </div>
            </div>
        )
    }
}