import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Allroutes from './Allroutes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Allroutes />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
