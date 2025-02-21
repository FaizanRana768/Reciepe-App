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
    { path: "/About", element: <About /> },
    { path: "/Contact", element: <Contact /> },
    { path: "/PackageDetails", element: <Blog /> },
    { path: "/Services", element: <Gallery /> }
  ];
  return (
    <>
      <Header />
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
