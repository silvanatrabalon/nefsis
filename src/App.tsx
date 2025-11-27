import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContentPage from './pages/ContentPage/ContentPage';
import ShopPage from './pages/ShopPage/ShopPage';
import ContactPage from './pages/ContactPage/ContactPage';
import './styles/globals.css';

function App() {
  return (
    <Router basename="/nefsis">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="sobre-mi" element={<AboutPage />} />
          <Route path="servicios" element={<ServicesPage />} />
          <Route path="contenido" element={<ContentPage />} />
          <Route path="tienda" element={<ShopPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
