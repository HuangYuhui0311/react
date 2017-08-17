import {Dispatcher} from "flux";
import ListStore from "./ListStore";
var AppDispatcher=new Dispatcher();
AppDispatcher.register(function(action){
    switch(action.actionType){
        case "ONLOAD":
            ListStore.setClassList(action.data);
            ListStore.onChange();
            break;
        default:
            break;
    }
})
export default AppDispatcher;