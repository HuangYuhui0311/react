import {Dispatcher} from "flux";
import ListStore from "../store/listStore";

var AppDispatcher=new Dispatcher();
AppDispatcher.register(function(actions){
    switch (actions.actionType){
        case "ADD_NEW_ITEM":
            ListStore.addNewItem(actions.newItem);
            ListStore.onChange();
            break;
        case "DELETE_LAST_ITEM":
            ListStore.deleteLastItem();
            ListStore.onChange();
            break;
        default:
            break;
    }
});
export default AppDispatcher;