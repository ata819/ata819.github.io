import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainAbout from "./pages/MainAbout";
import Home from "./Home";
import MainProjects from "./pages/MainProjects";
import MainContact from "./pages/MainContact";
import MainSkill from "./pages/MainSkill";
import MainBlog from "./pages/MainBlog";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mainabout' element={<MainAbout />} />
          <Route path='/mainprojects' element={<MainProjects />} />
          <Route path='/maincontact' element={<MainContact />} />
          <Route path='/mainskill' element={<MainSkill />} />
          <Route path='/mainblog' element={<MainBlog />} />
        </Routes>
      </Router>
    </main>
  );
}
export default App;