import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home/Home'
import Banner from './pages/Home/banner/Banner'
import Slider from './pages/Home/banner/Slider'
import Pricing from './pages/Pricing/Pricing'
import HowitsWorks from './pages/howItsWork/HowitsWorks'

function App() {


  return (
    <>
     <div>
      <main className='mb-10'>
        <div className='w-full bg bg-cover'>
       
        <Navbar></Navbar>
        <Banner></Banner>
        <Slider></Slider>
        </div>
        <HowitsWorks></HowitsWorks>
        <Pricing></Pricing>
      </main>
     </div>
    </>
  )
}

export default App
