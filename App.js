// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import Hero from './components/Hero';
import WeatherForecast from './components/WeatherForecast';
import MoviesPage from './components/MoviesPage';
import NewsPage from './components/NewsPage';
import Recipes from './components/RecipesPage';
import Products from './components/ProductsPage';
import NewPage from './components/NewPage';
import AboutPage from './components/AboutPage'; 
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/weather" element={<WeatherForecast />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/products" element={<Products />} />
          <Route path="/newpage" element={<NewPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contactus" element={<ContactPage />} />
        </Routes>
        <Footer /> {/* Add Footer component */}
      </div>
    </Router>
  );
};

export default App;
