import { DELETE_PALETTE, GET_PALETTES, POST_PALETTE, SINGLE_COLOR } from "../actions/constant"

const initialState = {
    palettes: [],
    palette: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SINGLE_COLOR:
            return {
                ...state,
                palette: [...state.palette, action.payload]
            }

        case GET_PALETTES:
            return {
                ...state,
                palettes: action.payload
            }

        case POST_PALETTE:
            return {
                ...state
            }

        case DELETE_PALETTE: 
            return {
                ...state
            }
     

        default:
            return state
        //break;
    }
}
export default rootReducer