import { configureStore,combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import{ persistReducer,persistStore} from "redux-persist";
import {createFilter} from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
    user:userSlice,
})
const savePersitUser=createFilter("user",['user'])
const persistConfig={
    key:'root',
    storage,
    transforms:[savePersitUser]
}
const persistedReducer = persistReducer(persistConfig,rootReducer);


export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }),
    devTools:true
})