import React from 'react';
import Banner from './Banner';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
const Home = () =>{
    return (
      <React.Fragment>
        <Banner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </React.Fragment>
  )
}

export default Home;
