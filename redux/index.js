import { combineReducers } from 'redux'
import configureStore from './CreateStore'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  ParametersStore: require('./ParametersRedux').reducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(
      reducers
  )

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)
    })
  }

  return { store }
}
