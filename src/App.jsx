import './CSS/App.css'
import NavBar from './Components/NavBar'
import AboutMe from './Pages/AboutMe'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import HomePage from './Pages/HomePage'
import {Route, Routes} from "react-router-dom"

export default function App() {
  return (
    <>
        <NavBar />
        <div className = "container">
          <Routes>
            <Route path="/PersonalWebsite" element={<HomePage />}/>
            <Route path="/AboutMe" element={<AboutMe />}/>
            <Route path="/Resume" element={<Resume />}/>
            <Route path="/Projects" element={<Projects />}/>
          </Routes>
        </div>
    </>
  )
}