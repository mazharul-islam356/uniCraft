import "./App.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Banner from "./pages/Home/banner/Banner";
import Slider from "./pages/Home/banner/Slider";
import Pricing from "./pages/Pricing/Pricing";
import Acordian from "./pages/acordian/Acordian";
import HowitsWorks from "./pages/howItsWork/HowitsWorks";

function App() {
  return (
    <>
      <div>
        <main>
          <div className="w-full bg-[url(https://i.ibb.co/JCcQw0C/bg.png)] bg-cover">
            <Navbar></Navbar>
            <Banner></Banner>
            <Slider></Slider>
          </div>
          <HowitsWorks></HowitsWorks>
          <Pricing></Pricing>
          <Acordian></Acordian>
          <Footer></Footer>
        </main>
      </div>
    </>
  );
}

export default App;
