import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Resume from './pages/resume/Resume'
import Projects from './pages/projects/Projects'
import NavBar from './components/NavBar'
// import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
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
        {/* <Route
          path='/projects/:projectDetails'
          element={<ProjectDetails />}
        /> */}
        <Route
          path='/resume'
          element={<Resume />}
        />

      </Routes>

    </>
  );
}

export default App;