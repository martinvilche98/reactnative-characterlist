import {ACTION_FETCH_CHARACTER_LIST} from '../actions/characterListActions.js';

export const characterListReducer = (state = {}, action) =>{

    switch(action.type){
        case ACTION_FETCH_CHARACTER_LIST:
            return{
                ...state,
                characters: action.payload
            }
        default:
                return state
    }
}