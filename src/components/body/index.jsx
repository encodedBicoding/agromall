import React from 'react';
import SectionCard from './SectionCard';
import CloserLook from './CloserLook';

import '../../assets/css/Homepage.css'
import '../../assets/css/Body.css'
function Body() {
  return (
    <>
      <div>
        <div className="leaves"></div>
      </div>
      <div className="m-top">
        <SectionCard
          title="Our Commitment"
          text="The AgroCola’s commitment is to create opportunities for the youth to thrive by engaging in agriculture and various agribusinesses. AgroCola is the integrated agricultural production platform that is built on digital technology."
          read_more={false}
          image_name="green_goblin"
        />
        <div className="left-curve"></div>
      </div>
      <div className="flex-column" >
        <SectionCard
          title="Our
          Policies and Resolution
          "
          text="AgroCola provides Nigeria’s young farmers and agriculture value chain participants with an opportunity to create market influence, improve productivity, improve returns, and rightly position to compete in a national and international marketplace."
          read_more={true}
          image_name="judge_of_jungle"
          sTop={true}
        />
          <div className="right-curve"></div>
      </div>
      <div className="flex-column">
        <SectionCard
          title="Our Sustainable Agriculture Philosophy"
          text="Our sustainable agriculture approach is anchored on the use of best available knowledge, technologies, and practices to ensure that intensification delivers more with minimal environmental impacts."
          read_more={true}
          image_name="bulb"
          sTop={true}
        />
        <div className="nike"></div>
      </div>
      <div className="flex-column">
          <CloserLook />
      </div>
      <div className="flex-column-center bg-grey sp-text">
       <div className="sp-text-image w-70">
         <img src={require('../../assets/images/standing_youths.svg')} alt="agrocola financial benefits" width="100%" height="auto"/>
       </div>
      </div>
      <div className="flex-column-center sp-text">
        <div className="flex-column-center our_story w-40">
            <h1>Hear Our Story</h1>
            <img src={require('../../assets/images/boy_o_boy.svg')} alt="agrocrop hear our story" width="100%" height="auto"/>
            <div className="bending_curve"></div>
        </div>
      </div>
      <div className="flex-column reshape_container">
        <div className="right_curve_v2"></div>
        <div className="flex-column-center m-auto">
          <div className="flex-row-center r_c">
            <div className="reshape_text">
              <h2>Let's reshape the future of agriculture, one crop at a time.</h2>
              <button>Join us</button>
            </div>
            <div className="reshape_img">
              <img src={require('../../assets/images/phone_secure.svg')} alt="secure phone" width="100%" height="auto"/>
            </div>
          </div>
        </div>
        <div className="flex-column-center bg-grey footer">
            <footer className="flex-row footer_wrap">
              <div className="footer_logo">
                <img src={require('../../assets/images/logo2.svg')} alt="footer logo"/>
                <div className="copy_rights">
                  <p className="font-small">
                    {
                      `Copyright ${new Date().getFullYear()} AgroMall Discovery and Extension Limited
                      All rights reserved`
                    }
                  </p>
                </div>
              </div>
              <div className="copy_links">
                <nav className="flex-column font-small">
                    <h3>Links</h3>
                    <a>Users</a>
                    <a>State</a>
                    <a>Media</a>
                    <a>Experience it</a>
                    <a>Join us</a>
                </nav>
              </div>
              <div className="flex-column">
                <h3 className="follow_us">Follow us</h3>
                <nav className="social_icons">
                  <a href="https://facebook.com">
                    <img src={require('../../assets/images/facebook.svg')} alt="agrocola facebook link" width="100%" height="auto"/>
                  </a>
                  <a href="https://twitter.com">
                    <img src={require('../../assets/images/twitter.svg')} alt="agrocola twitter link" width="100%" height="auto"/>
                  </a>
                  <a href="https://instagram.com">
                    <img src={require('../../assets/images/instagram.svg')} alt="agrocola instagram link" width="100%" height="auto"/>
                  </a>
                </nav>
              </div>
            </footer>
        </div>
      </div>
    </>
  )
}

export default Body