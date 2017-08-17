import React from "react";
import NavLink from "./NavLink.jsx";
import $ from "jquery";
import ListAction from "../flux/ListAction";
import Footer from "../components/Footer.jsx";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.loadComponentClassData = this.loadComponentClassData.bind(this);
    }
    loadComponentClassData(){
        $.ajax({
            url : 'http://172.168.1.177:3030/classData.json',
            dataType :'json',
            async:'false',
            type:'get',
            success:function(data){
                ListAction.setClassList(data);
            }.bind(this),
            error:function(err){
                console.log(err);
            }
        })
    }
    componentDidMount(){
        this.loadComponentClassData()
    }
    render(){
        return (
            <div className="body">
                <div className="nav clear">
                    <div className="logo">
                        <NavLink to="/"><img src="img/logo.jpg" alt=""/></NavLink>
                    </div>
                    <ul className="clear">
                        <li><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
                        <li><NavLink to="/aboutUs">关于我们</NavLink></li>
                        <li><NavLink to="/openClass">大咖公开课</NavLink></li>
                        <li><NavLink to="/employmentClass">明星之路就业班</NavLink></li>
                        <li><NavLink to="/teachers">名师动态</NavLink></li>
                    </ul>
                </div>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}