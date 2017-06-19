import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, } from 'react-router-redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import list from './reducers'
import user from './reducers/login'

const history = createHistory()
const middleware = [ thunk, routerMiddleware(history) ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    combineReducers({
        list,
        user,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
)

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}