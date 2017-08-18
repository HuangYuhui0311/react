import React from "react";
export default function(props){
    var items=props.item;
    var itemHtml=items.map(function(item,index){
        return <li key={index}>{item}</li>
    })
    return (
        <div>
            <ul>
                {itemHtml}
            </ul>
            <button onClick={props.addNewItem}>add NewItem</button>
        </div>

    )
}