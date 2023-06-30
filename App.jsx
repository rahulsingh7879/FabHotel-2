
import './App.css';
import About from './components/About';
import Amenties from './components/Amenties';
import CourtPolicies from './components/CourtPoliciesl';
import Footer from './components/Footer';
import Middlebar from './components/Middlebar';
import Navbar from './components/Navbar';
import NearByHotel from './components/NearByHotel';
import Rooms from './components/Rooms';

function App() {
  return (
    <div className=" container px-5 py-0 d-flex flex-column">
  <Navbar/>
  <Rooms/>
  <Middlebar />
  <About/>
  <Amenties/>
  <NearByHotel/>
  <CourtPolicies/>
  <Footer/>
    </div>

  );
}

export default App;
