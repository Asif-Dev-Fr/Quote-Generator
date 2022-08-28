import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ImageGenerator = () => {
  const [input, setInput] = useState("");

  // Methods
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="imageGeneratorContainer">
      <div className="imageGenerator">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>

          <div className="buttonDiv">
            <Button variant="danger" onClick={(e) => setInput("")}>
              Clear
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ImageGenerator;
