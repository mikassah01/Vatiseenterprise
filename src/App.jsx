import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import AboutScreen from "./screens/AboutScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ServicesScreen from "./screens/ServicesScreen";
import Footer from "./components/Footer";
import ContactScreen from "./screens/ContactScreen";
import Mansionette from "./screens/Mansionette";
import Bungalow from "./screens/Bungalow";
import Villa from "./screens/Villa";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar isTopOfPage={isTopOfPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/maisonette" element={<Mansionette />} />
        <Route path="/bungalow" element={<Bungalow />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/contactus" element={<ContactScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
