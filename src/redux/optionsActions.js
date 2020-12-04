import { SAVE_SELECTED_OPTION } from './actionTypes'

export const saveselectedOption = (data) => {
    return {
        type: SAVE_SELECTED_OPTION, 
        data
    }
}