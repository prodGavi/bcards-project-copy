import React, { createContext, useState } from 'react';
import { ToastContainer } from "react-toastify"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound';
import UpdateCard from './components/UpdateCard';
import ProductDetails from './components/CardDetails';
import NewCard from './components/NewCard';
import Profile from './components/Profile';
import MyCards from './components/MyCards';
import About from './components/About';

let themes = {
  light: { color: "#9DB2BF", color2: "#DDE6ED", color3: "#B2A4FF", background: "#27374D", background2: "#526D82", background3: "#e2f0ff64" },
  dark: { color: "#DBA39A", color2: "#F7FFE5", color3: "#A7727D", background: "#F5EBE0", background2: "#E7CEA6", background3: "#04040495" }
}

export let SiteTheme = createContext(themes.dark)

function App() {
  let [darkMode, setDarkMode] = useState<boolean>(false)
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (

    <div className="App">
      <ToastContainer />
      <SiteTheme.Provider value={darkMode ? themes.dark : themes.light}>
        <Router>
          <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <button className='btn btn-secondary darkModeButton' onClick={() => {
            setDarkMode(!darkMode)
          }}>
            <i className="fa-solid fa-circle-half-stroke" ></i></button>
          <Routes>
            <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/register' element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='/addcard' element={<NewCard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/mycards' element={<MyCards />} />
            <Route path='/updatecard/:id' element={<UpdateCard />} />
            <Route path='/mycards/updatecard/:id' element={<UpdateCard />} />
            <Route path='/carddetails/:id' element={<ProductDetails />} />
            <Route path='/mycards/carddetails/:id' element={<ProductDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </SiteTheme.Provider>

    </div>
  );
}

export default App;
