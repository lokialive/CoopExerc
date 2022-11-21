// import { legacy_createStore as createStore } from 'redux'
// import reducers from './reducer/index'

// const store = createStore(reducers, {})

// export default store

// redux
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer/index'
import { legacy_createStore as createStore } from 'redux'

const middleware = [thunk]
const initialState = {}

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

export default store
