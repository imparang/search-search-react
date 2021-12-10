import rootReducer from './reducers'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

store.sagaTask = sagaMiddleware.run(rootSaga)

export default store
