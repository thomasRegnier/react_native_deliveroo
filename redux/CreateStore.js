import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

// creates the store
export default (rootReducer) => {
  const middleware = []
  const enhancers = []

  enhancers.push(composeWithDevTools({})(applyMiddleware(...middleware)))
  let store = createStore(rootReducer, compose(...enhancers))

  return {
    store,
  }
}

