import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/login/login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Login}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
