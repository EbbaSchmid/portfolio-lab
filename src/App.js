import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './pages/about/index'
import Contact from './pages/contact/index'
import Resume from './pages/resume/index'
import Projects from './pages/projects/index'
import NavBar from './components/NavBar'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />   

        <Route
          path='/contact'
          element={<Contact />}
        />   

        <Route
          path='/projects'
          element={<Projects />}
        />

        <Route
          path='/resume'
          element={<Resume />}
        />

      </Routes>

    </>
  );
}

export default App