import Navbar from '../../Navbar/Navbar';
import Banner from './banner/Banner';
import './home.css'
const Home = () => {
    return (
        <div className='w-full h-[44em] bg bg-cover'>
        <Navbar></Navbar>
        <Banner></Banner>
        </div>
    );
};

export default Home;