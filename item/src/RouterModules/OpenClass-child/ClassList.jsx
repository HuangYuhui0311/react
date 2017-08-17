import React from "react";
import {Link} from "react-router";
import ListStore from "../../flux/ListStore"
import $ from "jquery";

export default class OpenClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classList:ListStore.getClassList()
        }
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