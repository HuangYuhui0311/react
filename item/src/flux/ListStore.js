import {EventEmitter} from 'events';
import assign from 'object-assign';


export default assign({},EventEmitter.prototype,{
    classList : [],
    setClassList(list){
        this.classList = list;
    },
    getClassList(){
        return this.classList;
    },
    onChange(){
        this.emit('change')
    },
    addChangeListener(callback){
        this.on('change',callback)
    },
    removeChangeListener(callback){
        this.removeListener('change',callback)
    }

})