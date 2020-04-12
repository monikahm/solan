import { combineReducers } from 'redux'
import { alert } from './alert.reducers'
import { authentication } from './authentication.reducer'

const appReducers = combineReducers({
  alert,
  authentication
})

const rootReducer = (state, action) => {
  return appReducers(state, action)
}
export default rootReducer
