import React from "react";
import { getQuote } from "../../api/api";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";

const QuoteGenerator = () => {
  const [randomNumber, setRandomNumber] = useState();

  // Methods :
  const findQuote = () => {
    let tmp = getQuote();
    if (tmp) {
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="mt-5 mb-3">
      <h3> Generate a quote </h3>
      <Button> Precedent </Button>
      <Button> Next </Button>
    </div>
  );
};

export default QuoteGenerator;
