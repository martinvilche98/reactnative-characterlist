import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {characterListReducer} from './reducers/CharacterListReducer'

// ROOT REDUCER
export const rootReducer = combineReducers({
    characterListReducer,
})

// STORE
export const store = createStore(rootReducer, applyMiddleware(thunk))