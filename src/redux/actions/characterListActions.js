import {API_URL} from '../../api/urls'
export const ACTION_FETCH_CHARACTER_LIST = "FETCH_CHARACTER_LIST"

export const fetchCharacterList = () => {

    return async (dispatch) =>{
        try {
            const response = await fetch(API_URL)
            const json = await response.json()
            const characters = json.results
            dispatch({type: ACTION_FETCH_CHARACTER_LIST, payload: characters})   
        } catch (error) {
            console.log(error)
            //dispatch({type: ON_ERROR, payload: error})   
        }
    }
}