
import { lazy, Suspense } from 'react';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
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

      <Suspense fallback={<p>Loading section...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
