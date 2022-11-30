import { SINGLE_COLOR } from "../actions/constant"

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
     

        default:
            return state
        //break;
    }
}
export default rootReducer