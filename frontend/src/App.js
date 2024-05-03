import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/shop';
import Reviews from './Pages/reviews';
import Contact from './Pages/contact';
import Product from './Pages/product';
import Cart from './Pages/cart';
import LoginSignUp from './Pages/loginSignUp';
import AboutUs from './Pages/aboutus';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=":productID" element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/aboutus' element ={<AboutUs/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
