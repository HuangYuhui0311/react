import {EventEmitter} from "events";
import assign from "object-assign";
export default assign({},EventEmitter.prototype,{
    classList:"",
    getClassList(){
        return this.classList;
    },
    onChange(){
        this.emit("change");
    },
    addChangeListener(fn){
        this.on("change",fn);
    },
    removeChangeListener(fn){
        this.removeListener(fn);
    }
});