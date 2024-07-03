import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Controller, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/index'
import BeatPage from './components/beatPage'
import Main from './components/main_page/index'
import AboutMePage from './pages/AboutMePage/index'
import AllBeats from './pages/AllBeatsPage/index'
import CartPage from './pages/CartPage'
import ContactMePage from './pages/ContactMePage/index'
import CustomBeatDetailsPage from './pages/CustomBeatDetailsPage'
import FaqPage from './pages/FAQPage/index'
import LicensingInfoPage from './pages/LicensingInfoPage'
import MixAndMasteringDetailsPage from './pages/MixAndMasteringDetailsPage'
import ServicesPage from './pages/ServicesPage/index'
import SoundKitDetailPage from './pages/SoundKitDetailPage'
import SoundKitsPage from './pages/SoundKitsPage'
import UserProfilePage from './pages/UserProfilePage'
import reportWebVitals from './reportWebVitals'
import AddBeatPage from './pages/AddBeatPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Controller>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/allbeats" element={<AllBeats />} />
      <Route path="/servicespage" element={<ServicesPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contactme" element={<ContactMePage />} />
      <Route path="/aboutme" element={<AboutMePage />} />
      <Route path="/soundkits" element={<SoundKitsPage />} />
      <Route path="/licensinginfo" element={<LicensingInfoPage />} />
      <Route path="/soundkits/westcoastloopkitvol1" element={<SoundKitDetailPage />} />
      <Route path="/services/custombeat" element={<CustomBeatDetailsPage />} />
      <Route path="/services/mixandmastering" element={<MixAndMasteringDetailsPage />} />
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/beatPage" element={<BeatPage />} />
      <Route path="/userprofile" element={<UserProfilePage />} />
      <Route path="/addbeat" element={<AddBeatPage />} />
    </Routes>
  </Controller>
)

reportWebVitals()
