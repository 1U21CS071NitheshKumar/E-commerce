import logo from './logo.svg';
import './App.css';
import Useeffectapi4 from './Useeffectapi4';
import Useeffectapi5 from './Useeffectapi5';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Viewdetails01 from './component/Viewdetails01';
import { createContext, useState } from 'react';
import Navbar from './component/Navbar';
import Loginpage from './component/Loginpage';
import Singup from './component/Singup';
import Homepage from './component/Homepage';
import Mobliepage from './component/Mobliepage';
import Tvpage from './component/Tvpage';
import Moblieviewdetail from './component/Moblieviewdetail';
import Moblieaddcart from './component/Moblieaddcart';
import Tvviewdetails from './component/Tvviewdetails';
import Tvaddcart from './component/Tvaddcart';
export let usercontext = createContext()
function App() {
  let [cart, setCart] = useState([])
  return (
    <>
      <usercontext.Provider value={[cart, setCart]}>
        <BrowserRouter>
          <Navbar />
         
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/Tvpage' element={ <Tvpage/>}></Route>
            <Route path='/Tvviewdetails/:id' element={<Tvviewdetails/>}></Route>
            <Route path='/Tvaddcart' element={<Tvaddcart/>}></Route>
            <Route path='/Mobliepage' element={ <Mobliepage />}></Route>
            <Route path='/Moblieviewdetail/:id' element={ <Moblieviewdetail/>}></Route>
            <Route path='/Moblieaddcart' element={<Moblieaddcart/>}></Route>
            <Route path='/Useeffectapi4' element={<Useeffectapi4 />}></Route>
            <Route path='/Useeffectapi5/:id' element={<Useeffectapi5 />}></Route>
            <Route path='/Viewdetails01' element={<Viewdetails01 />}></Route>
            <Route path='/Loginpage' element={<Loginpage />}></Route>
            <Route path='/Singup' element={<Singup />}></Route>
          </Routes>
        </BrowserRouter>
      </usercontext.Provider>

    </>
  );
}

export default App;
