import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './components/main_page/index'
import AboutMePage from './pages/AboutMePage/index'
import AlbumsPage from './pages/AlbumsPage'
import ContactMePage from './pages/ContactMePage/index'
import CustomBeatPage from './pages/CustomBeatPage/index'
import FaqPage from './pages/FAQPage/index'
import LicensingInfoPage from './pages/LicensingInfoPage'
import SoundKitsPage from './pages/SoundKitsPage'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/custombeat" element={<CustomBeatPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contactme" element={<ContactMePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/soundkits" element={<SoundKitsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/licensinginfo" element={<LicensingInfoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
