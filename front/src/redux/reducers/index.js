import { combineReducers } from 'redux'
import { queryReducer, marketReducer } from './shop'
const rootReducer = combineReducers({
  query: queryReducer,
  market: marketReducer
})

export default rootReducer
