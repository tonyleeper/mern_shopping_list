import React from 'react'
import { AppNavbar } from './components/AppNavbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css'

export const App = () => (
    <div className={styles.root}>
        <AppNavbar />
    </div>
)
