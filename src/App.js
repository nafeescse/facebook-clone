import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="">
     <Navbar></Navbar>
     <div className='h-screen'>
     <Home></Home>

     </div>
    </div>
  );
}

export default App;
