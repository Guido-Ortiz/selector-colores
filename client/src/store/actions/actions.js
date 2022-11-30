import { SINGLE_COLOR } from "./constant";

export function singleColor(payload){
    return{
        type: SINGLE_COLOR,
        payload
    }
}