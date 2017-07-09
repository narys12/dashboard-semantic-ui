import { combineReducers } from 'redux'
import leftSidebarReducer from './leftSidebar'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    leftSidebar: leftSidebarReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
