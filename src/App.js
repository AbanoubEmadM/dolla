import React from 'react'
import './App.css'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/signin'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
      </Switch>

    </Router>
  )
}

export default App
