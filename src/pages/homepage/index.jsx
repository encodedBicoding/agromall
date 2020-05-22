import React from 'react';
import {Helmet} from 'react-helmet';
import HomepageComponent from '../../components/homepage';

function Homepage() {
  return (
    <>
    <Helmet>
      <title>Agro crop</title>
    </Helmet>
    <HomepageComponent />
    </>
  )
}
export default Homepage;
