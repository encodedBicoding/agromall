import React from 'react';
import CloserLookComponent from './CloserLookComponent';

function CloserLook() {
  return (
    <>
      <div className="closer_look_container">
        <div className="closer_look"></div>
        <div className="closer_look_body flex-column-center">
            <div className="closer_look_contents">
              <div>
                <h1>A Closer Look</h1>
              </div>
              <div className="look_grid">
                  {
                    closerlookdata.map((detail, idx) => 
                    <CloserLookComponent 
                      key={idx}
                      image_name={detail.image_name}
                      title={detail.title}
                      text={detail.text}
                      url={detail.url}
                      alt={detail.alt}
                    />)
                  }
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default CloserLook;

const closerlookdata = [
  {
    image_name: 'hiw',
    title: 'how it works',
    text: 'AgroCola’s efficient and easy to use registration allows users to get onboard in a few easy steps.',
    url: 'https://www.hwdykm.xyz',
    alt: 'how it works'
  },
  {
    image_name: 'head_of_gods',
    title: 'associations',
    text: 'The AgroCola Association is an independent, not-for-profit membership organisation',
    url: 'https://www.hwdykm.xyz',
    alt: 'associations'
  },
  {
    image_name: 'money_grows',
    title: 'the new deal',
    text: 'AgroCola will bring financial benefits to the young ones of Nigeria that participate in 5 possibility',
    url: 'https://www.hwdykm.xyz',
    alt: 'money grows'
  },
  {
    image_name: 'zoom_zoom',
    title: 'the case of agroCola',
    text: 'We believe that if 2 million educated young farmers are engaged to cultivate 2 million hectares',
    url: 'https://www.hwdykm.xyz',
    alt: 'the case of agrocola'
  },
  {
    image_name: 'people',
    title: 'community',
    text: 'AgroCola is creating a vibrant collaborative community where young persons and other',
    url: 'https://www.hwdykm.xyz',
    alt: 'community'
  },
  {
    image_name: 'set_people',
    title: 'partners',
    text: 'Partnerships will support in several categories for the rapid development and deployment',
    url: 'https://www.hwdykm.xyz',
    alt: 'partners'
  },
  {
    image_name: 'pay_user',
    title: 'cola',
    text: 'AgroCola will drive financial inclusion of the youth in agriculture and the rural economy by',
    url: 'https://www.hwdykm.xyz',
    alt: 'cola'
  },
  {
    image_name: 'search_on',
    title: 'research and knowledge',
    text: 'The intersection of youth and digital technology holds the promise of unlocking exponential',
    url: 'https://www.hwdykm.xyz',
    alt: 'research and knowledge'
  }
]