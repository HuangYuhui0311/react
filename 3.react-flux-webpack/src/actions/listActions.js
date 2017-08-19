import appDispatcher from "../dispatacher/appDispatacher";

export default {
    addNewItem(newItem) {
        //存放动作的地方，要分发给派发器（分发之前，必须注册）
        appDispatcher.dispatch(
            {
                actionType: "ADD_NEW_ITEM",
                newItem: newItem
            }
        )
    },
    deleteLastItem() {
        //存放动作的地方，要分发给派发器（分发之前，必须注册）
        appDispatcher.dispatch(
            {
                actionType: "DELETE_LAST_ITEM"
            }
        )

    }
}