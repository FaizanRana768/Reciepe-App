import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import CursorFollow from './components/CursorFollow';
import Packages from './pages/Packages';
import Portfolio from './components/Portfolio';
import { Box } from '@mui/material';

const App: React.FC = () => {
  const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/services", element: <Services /> },
    { path: "/about", element: <About /> },
    { path: "/packagedetails", element: <Packages /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/contact", element: <Contact /> },
  ];
  return (
    <>
      <CursorFollow />
      <Header />
      <Box sx={{marginTop:10}}>
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
