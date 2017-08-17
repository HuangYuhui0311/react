import appDispatcher from "./appDispatacher";
export default{
    loadData(data){
        appDispatcher.dispatch({
            actionType:"ONLOAD",
            data:data
        })
    }
}