import { createStore } from 'redux'
import optionsReducer from './optionsReducer'

const store = createStore(optionsReducer)

export default store