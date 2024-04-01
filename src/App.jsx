import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Login}/>
          <Route path='/sign-up' Component={Signup}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
