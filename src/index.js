import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './components/main_page/index';
import AllBeats from './pages/AllBeatsPage/index';
import AboutMePage from './pages/AboutMePage/index';
import AlbumsPage from './pages/AlbumsPage';
import ContactMePage from './pages/ContactMePage/index';
import FaqPage from './pages/FAQPage/index';
import LicensingInfoPage from './pages/LicensingInfoPage';
import ServicesPage from './pages/ServicesPage/index';
import SoundKitDetailPage from './pages/SoundKitDetailPage';
import SoundKitsPage from './pages/SoundKitsPage';
import CustomBeatDetailsPage from './pages/CustomBeatDetailsPage';
import MixAndMasteringDetailsPage from './pages/MixAndMasteringDetailsPage';
import ScrollToTop from './components/ScrollToTop/index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allbeats" element={<AllBeats/>}/>
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contactme" element={<ContactMePage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/soundkits" element={<SoundKitsPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/licensinginfo" element={<LicensingInfoPage />} />
        <Route path="/soundkits/westcoastloopkitvol1" element={<SoundKitDetailPage />} />
        <Route path="/services/custombeat" element={<CustomBeatDetailsPage />} />
        <Route path="/services/mixandmastering" element={<MixAndMasteringDetailsPage />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

reportWebVitals();
