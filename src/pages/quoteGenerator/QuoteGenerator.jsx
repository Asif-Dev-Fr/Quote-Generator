import React, { useEffect, useState } from "react";
import { getQuote } from "../../api/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const QuoteGenerator = () => {
  const [quoteNumber, setQuoteNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Methods :
  const findQuote = async () => {
    let response = await getQuote();
    let tmpArray = [];
    if (response && input) {
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
  }, [input]);

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
      <h3> Generate a quote with the following word </h3>
      <Form className="row justify-content-center row-column">
        <Form.Group
          className="mb-3 col-lg-10 col-12"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Search"
            name="search"
            onChange={(e) => setInput(e.target.value.trim().toLowerCase())}
          />
        </Form.Group>
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
      </Form>
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
    </div>
  );
};

export default QuoteGenerator;
