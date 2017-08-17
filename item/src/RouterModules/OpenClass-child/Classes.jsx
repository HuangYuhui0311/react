import React from "react";
import {Link} from "react-router";
import NavLink from "../NavLink.jsx";
import ListStore from "../../flux/ListStore";

export default class Classes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classList:ListStore.getClassList()
        }
        this._onChange=this._onChange.bind(this);
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

    render(){
        var classId=this.props.params.classId;
        var that=this;
        return (
            <div className="course">
                <p><Link to="/">首页</Link> > <Link to="/openClass">点师课堂</Link> > <Link to="/openClass">大咖公开课</Link> > 讲师之道 </p>
                {
                    this.state.classList.map(function(item,index){
                        if(classId==item.id){
                            return (
                                <div>
                                    <div className="course_bd">
                                        <div className="courseL">
                                            <a href="javascript:;"><img src={"../../img/"+item.imgSrc} alt=""/></a>
                                        </div>
                                        <div className="courseR">
                                            <h2>{item.title}</h2>
                                            <p className="p1">{item.describe}</p>
                                            <p className="p2">学习人数：{item.learn_person}人 | 收藏</p>
                                            <p className="p3"><i>免费</i> <s>￥{item.price}</s></p>
                                            <p className="p4"><a href="javascript:;" className="on">立即购买</a><a href="javascript:;">在线咨询</a></p>
                                        </div>
                                    </div>
                                    <div className="clear cou">
                                        <div className="course_link">
                                            <p>
                                                <NavLink to={"/openClass/"+item.id} onlyActiveOnIndex>课程介绍</NavLink>
                                                <NavLink to={"/openClass/"+item.id+"/online"}>课程大纲</NavLink>
                                            </p>
                                            {that.props.children}
                                        </div>
                                        <div className="teacher">
                                            <div className="tehImg">
                                                <img src={"../../img/"+item.teacher.img} alt=""/>
                                            </div>
                                            <p className="name">{item.teacher.name}</p>
                                            <p className="intro">{item.teacher.introduce}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}
