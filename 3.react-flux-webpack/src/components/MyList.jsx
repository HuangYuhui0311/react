import React from "react";

export default function(props){
    var items=props.items;
    var itemHtml=items.map(function(item,index){
        return <li key={index}>{item}</li>
    })
    return (
        <div>
            <ul>
                {itemHtml}
            </ul>
            <button onClick={props.addNewItem}>new Item</button>
            <button onClick={props.deleteLastItem}>delete lastItem</button>
        </div>
    )
}