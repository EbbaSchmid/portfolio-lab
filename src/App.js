import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        
        <Route path='/about'
          element={<About/>} />

        <Route path='/contact'
          element={<Contact/>} />

        <Route path='/home'
          element={<Home/>} />

        <Route path='/projects'
          element={<Projects/>} />

        <Route path='/resume'
          element={<Resume/>} />

      </Routes>
    </div>
  );
}

export default App;
