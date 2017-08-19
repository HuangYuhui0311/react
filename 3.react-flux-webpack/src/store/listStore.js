import {EventEmitter} from "events";//事件监听和发射
import assign from "object-assign";//整合对象

//把当前对象和事件监听与发射插件整合
export default assign({},EventEmitter.prototype,{
    list:[1,2,3,4,5],
    getList(){
        return this.list;
    },
    addNewItem(newItem){
        this.list.push(newItem)
    },
    deleteLastItem(){
        this.list.pop();
    },
    onChange(){
        this.emit("change");
    },
    /*onDelete(emitFn){
        this.emit(emitFn);
    },*/
    addChangeListener(fn){
        this.on("change",fn);
    },
    /*addDeleteListener(fnName,fn){
        this.on(fnName,fn);
    },*/
    removeChangeListener(fn){
        this.removeListener(fn);
    }
})