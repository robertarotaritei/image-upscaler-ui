import NavigationBar from "./components/NavigationBar";
import './App.scss';
import './fonts/aqua.ttf';
import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import OverviewPage from "./components/OverviewPage/OverviewPage";
import AboutPage from "./components/AboutPage/AboutPage";
import RealESRGANPage from "./components/RealESRGANPage/RealESRGANPage";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#003764";
  });

  function Layout() {
    return (
      <div>
        <NavigationBar />
        <Outlet />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OverviewPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="real-esrgan" element={<RealESRGANPage />} />
          <Route path="*" element={<Navigate replace to="/"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
