import { DELETE_PALETTE, GET_PALETTES, POST_PALETTE, SINGLE_COLOR } from "../actions/constant"

const initialState = {
    palettes: [],
    // palettes: [{
    //     name: 'palette #1',
    //     colors: ['blue', 'red', 'orange', 'lightblue', 'yellow']
    // }, {
    //     name: 'palette #1',
    //     colors: ['blue', 'red', 'orange', 'lightblue', 'yellow']
    // },{
    //     name: 'palette #1',
    //     colors: ['blue', 'red', 'orange', 'lightblue', 'yellow']
    // }, {
    //     name: 'palette #1',
    //     colors: ['blue', 'red', 'orange', 'lightblue', 'yellow']
    // }],
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
            // console.log(action.payload)
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