import { SAVE_SELECTED_OPTION } from './actionTypes'
import { RESET_QUIZ } from './actionTypes' 

const initialState = {
    selectedOptions: []
}

const optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SELECTED_OPTION: {
            return {
                ...state,
                selectedOptions: action.data
                // selectedOptions: state.selectedOptions.map((selectedOption) => selectedOption.id === action.data.id ? action.data : selectedOption)
            }
        }
        case RESET_QUIZ:{
            return{
                state:initialState
                
            },
            
            console.log(state,"statee")
        }
        default: return state
    }
}

export default optionsReducer