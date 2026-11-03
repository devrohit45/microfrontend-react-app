
import React, { lazy, Suspense } from 'react';

import {
  HashRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';

const Home = lazy(() => import('home/App'));
const About = lazy(() => import('about/App'));
const Products = lazy(() => import('products/App'));
const Contact = lazy(() => import('contact/App'));

function App() {
  return (
    <HashRouter>
      <header className="header">
        <h2>ShopEase</h2>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="main-content">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="footer">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </HashRouter>
  );
}

export default App;
