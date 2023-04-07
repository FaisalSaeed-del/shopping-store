
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from "react-redux"
import store from "./store/store"
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
   <Provider store={store}>
     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
   </Provider>
   </>
  );
}

export default App;
