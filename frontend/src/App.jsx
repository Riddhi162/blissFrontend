import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer/Footer.jsx"

// Lazy load pages to improve initial load performance
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const Contact = lazy(() => import("./pages/Contact.jsx"))
const About = lazy(() => import('./pages/About.jsx'))
const Service = lazy(() => import("./pages/ServicePage.jsx"))
const Partners = lazy(() => import("./pages/Partners.jsx"))
const Library = lazy(() => import('./pages/Library.jsx'))
const Markets = lazy(() => import('./pages/Markets.jsx'))
const News = lazy(() => import('./pages/News.jsx'))
const LibraryDetails = lazy(() => import('./pages/LibraryDetails.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const PartnerDetails = lazy(() => import('./pages/PartnerDetails.jsx'))
const MarketDetails = lazy(() => import('./pages/MarketDetails.jsx'))
const NewsDetails = lazy(() => import('./pages/NewsDetails.jsx'))
const GDPR = lazy(() => import('./pages/GDPR.jsx'))
const TNC = lazy(() => import('./pages/TNC.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const EventDetails = lazy(() => import('./pages/EventDetails.jsx'))

// Loading component to show during lazy loading
const LoadingFallback = () => <div>Loading...</div>

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partner/:partnerId" element={<PartnerDetails />} />
          <Route path="/library" element={<Library />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/market-details/:id" element={<MarketDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/tnc" element={<TNC />} />
          <Route path="/library/:id" element={<LibraryDetails />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </Suspense>
      <Footer/>
    </Router>
  )
}

export default App