import React from 'react'
import { AppNavbar } from './components/AppNavbar'
import { ShoppingList } from './components/ShoppingList'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const App = () => (
    <div>
        <AppNavbar />
        <ShoppingList />
    </div>
)
