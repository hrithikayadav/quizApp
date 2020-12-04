import { SAVE_SELECTED_OPTION } from './actionTypes'

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
        default: return state
    }
}

export default optionsReducer