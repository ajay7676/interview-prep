import React from 'react';
import ReactDOM from 'react-dom/client'
// import './style.css'
/**
 * Header
 * - Logo
 * - Nav Item
 * 
 * Body
 * - Search Input
 *  - Seach Btn
 * 
 * - RestruantContainer
 * - RestruantCard
 * Foote = ()r
 * - Copy Ri =>{
 * }ght
 * - link
 * -Address
 * - Contact
 */
const Header = () =>{
    return(
        <>
          <div className='header'>
            <div className='logo-container'>
                <img className='logo'  style={{width: "130px"}} src='https://png.pngtree.com/png-vector/20221231/ourmid/pngtree-food-delivery-logo-template-design-sign-menu-vector-png-image_43664212.jpg' alt='Logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
          </div>
        </>
    )
}

const stlyeCard = {
    backgroundColor : "#f2f2f2"
}
const objData = [
    {
        "id" : "1",
        "name": "Bharawan Da Dhaba",
        "rating": "4.4",
        "rating_count": "50+ ratings",
        "cost": "₹ 300",
        "address": "Bharawan Da Dhaba, rimpy bakery 12 circular road main bazar abohar",
        "cuisine": "Indian",
        "lic_no": "license",
        "arrivingtime": "36 minutes",
      }
]
const RestruantCard = (props) =>{
    const {objData} = props;
       console.log(props)
       return(
        <>
         <div className='res-card' style={stlyeCard}>
             <img
             className='res-logo'
             alt=''
             src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x1sxbpv6stnnlouvt4vt"/>
             <h3 className='res-name'>{objData[0].name}</h3>
             <h4 className='res-course-namme'>{objData[0].cuisine}</h4>
             <h5 className='res-rating'>{objData[0].rating} Stars</h5>
             <h5 className='res-arrival-time'>{objData[0].cost}</h5>
             <h5 className='res-arrival-time'>{objData[0].arrivingtime}</h5>
         </div>
        
        </>
       )
    }

const Body = () =>{
    return(
        <>
         <div className='body'>
            <div className='seach-bar'>Search</div>
            <div className='res-container' >
                 <RestruantCard objData={objData} />
            </div>
         </div>
        </>
    )
}
const AppLayout = () =>{

    return(
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)

// React Element 
