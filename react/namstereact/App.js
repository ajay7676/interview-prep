import React, { useContext, useEffect, useState } from 'react';
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
<<<<<<< HEAD
import RestaurantDetail from './src/components/RestaurantDetail';
import UserContext from './src/utils/UserContext';
=======
import DosaRestaurant from './src/components/DosaRestaurant';
>>>>>>> 750152c37cbeea4b853e904481a962330660630f



const AppLayout = () =>{
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
          name: "Ajay Chauhan",
        }
        setUserName(data.name)
    }, [])
    
    return(
        <div className='app'>
            <UserContext.Provider value={{LoggedInUser: userName , setUserName}}>
              <Header />
              <Outlet />
            </UserContext.Provider>
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
<<<<<<< HEAD
        <Route path='restaurant/detail'  element={<RestaurantDetail />}/>
=======
        <Route path="dosa-restaurant" element={< DosaRestaurant />} />
>>>>>>> 750152c37cbeea4b853e904481a962330660630f
        <Route path="restaurants/:resId" element={< ResutrantMenu />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
)