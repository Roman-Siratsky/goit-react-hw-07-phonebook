import {configureStore, getDefaultMiddleware, combineReducers} from '@reduxjs/toolkit'
import phoneBookReducer from './phoneBook/phoneBookReducer'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage' 
import 
{
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
}from 'redux-persist'



const rootReducer = combineReducers({
    phoneBook: phoneBookReducer
})

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
    logger,
    ]

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})


export default store