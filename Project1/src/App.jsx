import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import { Header } from './components/Header'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/alert/:id' element={<DetailPage />}/>
      </Routes>
    </Router>
  )
}

export default App
