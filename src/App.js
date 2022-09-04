import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="">
      
      <div className=''>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
