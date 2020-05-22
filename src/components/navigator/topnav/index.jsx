import React from 'react';

function Topnav() {
  return (
    <>
      <nav className="main_nav_container">
        <nav className="flex-row">
          <div className="logo_image"></div>
          <nav className="nav_lists flex-row">
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
        </nav>
      </nav>
    </>
  )
}

export default Topnav;


