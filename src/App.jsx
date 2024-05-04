import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from "./components/Banners/BannerSlider";
import HomeCategory from "./components/Category/HomeCategory";
function App() {
  return (
    <>
      <Navbar />
      <BannerSlider />
      <HomeCategory />
      <Outlet />
    </>
  );
}

export default App;
