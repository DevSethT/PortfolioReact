import "./App.css";
import { Routes, Route } from "react-router-dom";


import NavBar from '../NavBar/NavBar';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import About from '../About/About';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  return (
    <div className="app">
    <NavBar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
