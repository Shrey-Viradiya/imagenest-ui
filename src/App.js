import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import HomePage from './pages/HomePage';
import CreatePinPage from './pages/CreatePinPage';
import ExpandedPinPage from './pages/ExpandedPinPage';
import BoardsPage from './pages/BoardsPage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePinPage />} />
          <Route path="/pin/:id" element={<ExpandedPinPage />} />
          <Route path="/boards" element={<BoardsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;