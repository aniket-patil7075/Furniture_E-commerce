import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './assets/Header'
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom'  
import Shop from './assets/Shop';
import Home from './assets/Home';
import AbuotUs from './assets/AbuotUs';
import Services from './assets/Services';
import Blog from './assets/Blog';
import ContactUs from './assets/ContactUs';
import User from './assets/User';
import Cart from './assets/Cart';
import Footer from './assets/Footer';
import Checkout from './assets/Checkout';
import QRCodeWithCountdown from './assets/QRCodeWithCountdown';
import COD from './assets/COD';
import BillingAddress from './assets/BillingAddress';
import Checkout2 from './assets/Checkout2';
import Signup from './assets/Signup';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/AboutUs' element={<AbuotUs/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        {/* <Route path='/check' element={<Checkout2/>}/> */}
        <Route path='/qrcode' element={<QRCodeWithCountdown/>}/>
        <Route path='/billingAdd' element={<BillingAddress/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
