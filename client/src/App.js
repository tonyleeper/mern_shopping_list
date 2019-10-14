import React from 'react'
import { AppNavbar } from './components/AppNavbar'
import { ShoppingListContainer } from './components/ShoppingListContainer'
import { ItemModalContainer } from './components/ItemModalContainer'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import { store } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const App = () => (
    <Provider store={store}>
        <div>
            <AppNavbar />
            <Container>
                <ItemModalContainer />
                <ShoppingListContainer />
            </Container>
        </div>
    </Provider>
)
