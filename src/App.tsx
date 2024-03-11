import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './Utils/hooks';
import { getAllCountriesByName, getAllCountriesByRegion, getAllCountriesWithParams } from './Data/slices/countries';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import SelectOneInput from './Components/Inputs/Select';
import TeamSection12 from './Components/Cards';
import SearchInput from './Components/Inputs/Search';
import Header from './Components/Header';
import LoginPage from './Pages/Auth/Login';
import AppRoutes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
         
          <ToastContainer/>
          <AppRoutes/>
      </div>
  );
}

export default App;
