import React, { useState } from "react";
import ImageGenerator from "../imageGenerator/ImageGenerator";
import QuoteGenerator from "../quoteGenerator/QuoteGenerator";


const Homepage = () => {
 return (
  <div>
    <QuoteGenerator />
    <ImageGenerator />
  </div>
 )
};

export default Homepage;
