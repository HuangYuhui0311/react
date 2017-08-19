import React from "react";
import {Link,hashHistory} from "react-router";

export default class Repos extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        var className=e.target.elements[0].value,
            classId=e.target.elements[1].value;
        // es6语法 字符串模板 ， 字符串模板最大的优点就是可以随时拼接变量和字符串 不需要 +'  '+
        // 加入变量的方法 ${}
        var path=`/repos/${className}/${classId}`;
        hashHistory.push(path);//跳转
    }
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/repos/web515/001">web</Link>
                    </li>
                    <li>
                        <Link to="/repos/UI515/002">ui</Link>
                    </li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="className"/>
                            <input type="text" placeholder="classId"/>
                            <button type="submit">提交</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>

        )
    }
}