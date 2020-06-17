import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import Login from './components/Login'
import SignIn from './components/Sign-in'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact/>
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
