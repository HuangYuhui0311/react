import appDispatcher from "./appDispatacher";
export default{
    setClassList(data){
        appDispatcher.dispatch({
            actionType:"ONLOAD",
            data:data
        })
    }
}