import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import root from '~Store/reducers/root'
import charactersSaga from '~Store/sagas/character'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    root,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(charactersSaga)
  return store
}
