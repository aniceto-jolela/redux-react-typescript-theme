import { combineReducers, createStore } from "redux";
import codeCoresReducer from "./reducers/code-cores.reducer";
import themeReducer from "./reducers/theme.reducer";


const rootReducer = combineReducers({
    codigo: codeCoresReducer,
    theme: themeReducer
})

const store = createStore(rootReducer)

export default store