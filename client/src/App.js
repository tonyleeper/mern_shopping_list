import React from 'react'
import { AppNavbar } from './components/AppNavbar'
import { ShoppingListContainer } from './components/ShoppingListContainer'

import { Provider } from 'react-redux'
import { store } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const App = () => (
    <Provider store={store}>
        <div>
            <AppNavbar />
            <ShoppingListContainer />
        </div>
    </Provider>
)
