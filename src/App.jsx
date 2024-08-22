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
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
