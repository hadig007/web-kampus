import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            isSidebar : false
        }
    }
})

export default store;