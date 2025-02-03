import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <Blog /> },
    { path: "/gallery", element: <Gallery /> }
  ];
  return (
    <>
      <Header />
      <Routes>
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
