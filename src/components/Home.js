import React from "react";
import Nav from "./Nav";
import Heading from "./Heading";
import ShoeSearch from "./ShoeSearch";

const Home = () => {
  return (
    <div className='home-page'>
      <Heading />
      <Nav />
      <ShoeSearch/>
    </div>
  );
};

export default Home;
