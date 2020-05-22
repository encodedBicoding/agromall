import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../header';
import Body from '../body';
import '../../assets/css/Homepage.css'
function Homepage() {
  return (
    <>
    <Helmet>
      <title>Welcome to Agrocola</title>
    </Helmet>
      <Header/>
      <Body/>
    </>
  )
}

export default Homepage;