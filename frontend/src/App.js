import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/home';
import Reviews from './Pages/reviews';
import Shop from './Pages/shop';
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
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/shop' element={<Shop/>}/>
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
