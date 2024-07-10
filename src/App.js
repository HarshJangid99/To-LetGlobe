
import './App.css';
import Footer from './components/Footer';
import Getintouch from './components/Getintouch';
import Navbar from './components/Navbar';
import Contactus from './components/Contactus';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
 <Route exact path='/' element ={<Getintouch/>}></Route>
 <Route exact path='/Contact' element ={<Contactus/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
