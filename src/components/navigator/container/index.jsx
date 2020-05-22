import React from 'react';
import Topnav from '../topnav';
import '../../../assets/css/Homepage.css';

function NavContainer() {
  return (
    <>
     <div className="top_nav_container">
       <div className="top_nav_holder">
         <Topnav/>
       </div>
       <div className="header_context w-100">
         <div className="flex-row-center w-100">
            <div className="header_context_container font-white">
              <h1>Welcome To AgroCola</h1>
              <p>Digital Agriculture for tomorrows leaders</p>
            </div>
            <div className="header_context_image"></div>
          </div>
       </div>
     </div>
    </>
  )
}

export default NavContainer;
