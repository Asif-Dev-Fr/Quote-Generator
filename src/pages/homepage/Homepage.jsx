import React, { useState } from "react";
import ImageGenerator from "../imageGenerator/ImageGenerator";
import QuoteGenerator from "../quoteGenerator/QuoteGenerator";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Homepage = () => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState("");

  // Methods :
  const handleInput = () => {
    if (input) setStep(2);
  };

  return (
    <div>
      {step === 1 && (
        <div className="homepageInput">
          <Form className="row justify-content-center row-column">
            <Form.Group
              className="mb-3 col-lg-10 col-12"
              controlId="formBasicEmail"
            >
              <Form.Control
                type="text"
                placeholder="Ex: Motivation"
                name="search"
                onChange={(e) => setInput(e.target.value.trim().toLowerCase())}
              />
              <Button variant="success" onClick={(e) => handleInput(e)}>
                Search
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}

      {step === 2 && <QuoteGenerator input={input} />}
      {step === 3 && <ImageGenerator />}
    </div>
  );
};

export default Homepage;
