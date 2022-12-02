import axios from 'axios';

import { GET_PALETTES, SINGLE_COLOR } from "./constant";

export function singleColor(payload){
    return{
        type: SINGLE_COLOR,
        payload
    }
}

export function getPalettes(){
    return async function(dispatch){
        try{
            const response = await axios.get(`http://localhost:3001/palettes`)
            return dispatch({
                type: GET_PALETTES,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function postPalette(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/palette', payload)
        return response
    }
}


export function deletePalette(id){
    console.log(id)
    return async function(dispatch){
        const response = await axios.delete(`http://localhost:3001/palette/${id}`)
        console.log(response)
        return response
    }
}