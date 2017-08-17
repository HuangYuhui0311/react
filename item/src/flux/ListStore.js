import {EventEmitter} from "events";
import assign from "object-assign";
import $ from "jquery"
export default assign({},EventEmitter.prototype,{
    classList:[],
    getClassList(){
        return this.classList;
    },
    onChange(){
        this.emit("change");
    },
    loadData(){
        $.ajax({
            url:"http://172.168.1.177:3030/classDate.json",
            dataType:"json",
            type:"get",
            success:function(data){
                return data;
            },
            error:function(err){
                console.log(err);
            }
        });
    },
    addChangeListener(fn){
        this.on("change",fn);
    },
    removeChangeListener(fn){
        this.removeListener(fn);
    }
});