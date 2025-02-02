import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';


function App() {
  const location = useLocation();


  return (
    <>
      <Nav />
    
      {/* AnimatePresence for transition to work in sync with the routing */}
      <AnimatePresence mode="wait">
    
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
    
      </AnimatePresence >

    </>
  );
}

export default App;
