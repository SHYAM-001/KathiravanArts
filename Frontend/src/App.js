import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound'
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/contact" element={<Main />} /> {/* Corrected the casing here */}
          <Route path="/about" element={<Main />} /> {/* Corrected the casing here */}
          <Route path = "/gallery" element={<Main/>}/>
          <Route path = "/login" element={<LoginPage/>}/>
          <Route path = "/signup" element={<SignUpPage/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
