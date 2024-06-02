import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './components/main_page/index'
import CustomBeatPage from './pages/CustomBeatPage/index'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/custombeat" element={<CustomBeatPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
