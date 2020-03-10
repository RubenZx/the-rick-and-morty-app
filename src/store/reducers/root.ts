import { combineReducers } from 'redux'
import {
  characterByIdReducer,
  charactersReducer,
  multipleCharacterByIdReducer,
} from './character'

const rootReducer = combineReducers({
  charactersReducer,
  characterByIdReducer,
  multipleCharacterByIdReducer,
})

export default rootReducer
