import React, { useState } from 'react';

function Topnav() {

  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <>
      <nav className="main_nav_container">
        <nav className="flex-row">
          <div className="logo_image"></div>
          <nav className="nav_lists flex-row non_mobile">
              <div className="nav_list_item">
                <a href="javascript:void(0)">Vision</a>
              </div>
              <div className="nav_list_item">
                <a href="javascript:void(0)">Technology</a>
              </div>
              <div className="nav_list_item">
                <a href="javascript:void(0)">Experience it</a>
              </div>
              <div className="nav_list_item">
                <a href="javascript:void(0)">Sign in</a>
              </div>
          </nav>
          <nav className="mobile w-40">
            <nav className="mobile_nav_holder">
            <nav className="mobile_navigator">
                <div onClick={() => setShowMobileNav(!showMobileNav)} className="bar_container">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
            </nav>

            {
                showMobileNav ?
                <nav className="flex-column m_nav">
                  <div className="m_nav_link">
                    <a href="javascript:void(0)">Vision</a>
                  </div>
                  <div className="m_nav_link">
                    <a href="javascript:void(0)">Technology</a>
                  </div>
                  <div className="m_nav_link">
                    <a href="javascript:void(0)">Experience it</a>
                  </div>
                  <div className="m_nav_link">
                    <a href="javascript:void(0)">Sign in</a>
                  </div>
                </nav>
                :
                ''
              }
            </nav>
          </nav>
        </nav>
      </nav>
    </>
  )
}

export default Topnav;


