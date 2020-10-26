import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// Routes
import RegisterScreen from './screens/RegisterScreen'

ReactDOM.render(
    <React.StrictMode>
        {' '}
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/register" />
                </Route>
                <Route path="/register" component={RegisterScreen} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
