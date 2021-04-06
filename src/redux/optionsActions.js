import { SAVE_SELECTED_OPTION } from './actionTypes'
import { RESET_QUIZ } from './actionTypes'

export const saveselectedOption = (data) => {
    return {
        type: SAVE_SELECTED_OPTION, 
        data
    }
}

export const reset=()=>{
    return{
        type:RESET_QUIZ
    }
}