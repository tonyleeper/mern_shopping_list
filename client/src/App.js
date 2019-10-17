import React, { Component } from 'react'
import { AppNavbarContainer } from './components/AppNavbarContainer'
import { ShoppingListContainer } from './components/ShoppingListContainer'
import { ItemModalContainer } from './components/ItemModalContainer'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import { store } from './store'
import { loadUser } from './actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <AppNavbarContainer />
                    <Container>
                        <ItemModalContainer />
                        <ShoppingListContainer />
                    </Container>
                </div>
            </Provider>
        )
    }
}
