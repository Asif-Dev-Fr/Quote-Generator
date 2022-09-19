import React, { useEffect, useState } from "react";
import { getQuote } from "../../api/api";
import Button from "react-bootstrap/Button";

const QuoteGenerator = ({ input }) => {
  const [quotesArray, setQuotesArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState(0);

  // Methods :
  const findQuote = async () => {
    let response = await getQuote();
    console.log(input, "i!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", !!response, !!input)
    let tmpArray = [];
    if (response && input) {
      console.log("first")
      setLoading(true);
      let capitalize = input.charAt(0).toUpperCase() + input.slice(1);
      console.log(capitalize);
      let first = response.filter((quote) => quote.text.includes(capitalize));
      let second = response.filter((quote) => quote.text.includes(input));
      tmpArray = first.concat(second);
      console.log(tmpArray);
      setQuotesArray(tmpArray);
      setLoading(false);
    }
  };

  useEffect(() => {
    findQuote();
  }, []);

  const precedentQuote = () => {
    if (quoteNumber !== 0) {
      setQuoteNumber((prevNumber) => {
        return prevNumber - 1;
      });
    }
  };

  const nextQuote = () => {
    console.log(quoteNumber, quotesArray.length);
    if (quoteNumber + 1 !== quotesArray.length) {
      setQuoteNumber((prevNumber) => {
        return prevNumber + 1;
      });
    }
  };

  return (
    <div className="mt-5 mb-3">
      <h3> Choose your quote </h3>

      {!loading && input && (
        <div>
          <p>
            {quotesArray[quoteNumber] && quotesArray[quoteNumber].text
              ? quotesArray[quoteNumber].text
              : ""}
          </p>
          <p>
            {quotesArray[quoteNumber] && quotesArray[quoteNumber].author
              ? quotesArray[quoteNumber].author
              : ""}
          </p>
        </div>
      )}
      <Button
        className="mb-3 col-lg-9 col-12"
        onClick={precedentQuote}
        disabled={quoteNumber === 0}
        variant={"danger"}
      >
        Precedent
      </Button>
      <Button
        className="mb-3 col-lg-9 col-12"
        onClick={nextQuote}
        disabled={quoteNumber + 1 === quotesArray.length}
        variant={"success"}
      >
        Next
      </Button>
    </div>
  );
};

export default QuoteGenerator;
