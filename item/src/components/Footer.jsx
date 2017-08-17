import React from 'react';

export default class Footer extends React.Component{
    constructor(props){
        super(props);

    }
    getFooterStyle(){
        return{
            width:"1200px",
            height:"381px",
            margin:"0 auto",
            background:"url(../img/footer.jpg) no-repeat center top"
        }
    }
    render(){
        var footerStyle=this.getFooterStyle();
        return(
            <div className="footer" style={footerStyle}></div>
        )
    }
}