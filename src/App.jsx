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
            <Route path="/" element={<HomePage />}/>
            <Route path="/PersonalWebsite/HomePage" element={<HomePage />}/>
            <Route path="/PersonalWebsite" element={<HomePage />}/>
            <Route path="/PersonalWebsite/AboutMe" element={<AboutMe />}/>
            <Route path="/PersonalWebsite/Resume" element={<Resume />}/>
            <Route path="/PersonalWebsite/Projects" element={<Projects />}/>
          </Routes>
        </div>
    </>
  )
}