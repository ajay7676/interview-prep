import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import { BrowserRouter, Routes, Route , Outlet  } from "react-router";
import About from './src/components/About';
import ContactUs from './src/components/Contact';
import Home from './src/components/Home';
// import Service from './src/components/Service';
import Error from './src/components/Error'
import ResutrantMenu from './src/components/ResutrantMenu';
import Cart from './src/components/Cart';
import DosaRestaurant from './src/components/DosaRestaurant';



const AppLayout = () =>{

    return(
        <div className='app'>
            <Header />
            <Outlet />
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout />)
root.render(
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={< Home />} />
        <Route path="about" element={< About />} />
        <Route path="contact" element={< ContactUs />} />
        <Route path="cart" element={< Cart />} />
        <Route path="dosa-restaurant" element={< DosaRestaurant />} />
        <Route path="restaurants/:resId" element={< ResutrantMenu />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
)