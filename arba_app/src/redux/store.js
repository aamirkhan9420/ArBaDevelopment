import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./Auth/reducer";
import thunk from "redux-thunk"
const store=legacy_createStore(reducer,applyMiddleware(thunk))

export {store}



// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import thunk from "redux-thunk"
// import {reducer as AppReducer} from "./App/reducer"
// import {reducer as AuthReducer} from "./Auth/reducer"

// const rootReducer=combineReducers({AppReducer,AuthReducer})

// const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
// export {store}