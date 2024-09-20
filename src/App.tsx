import {  BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';
import "react-toastify/dist/ReactToastify.css";
import RoutesLayout from './pages/routes/routes'
import { useEffect, useState } from 'react';


function App() {


  return (
    <Router>
      <Header />
      <RoutesLayout />
    </Router>
  );
}

export default App