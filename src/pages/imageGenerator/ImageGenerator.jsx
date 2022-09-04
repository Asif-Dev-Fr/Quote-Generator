import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getImage } from "../../api/api";
import Image from "../../components/Image";

const ImageGenerator = () => {
  const [input, setInput] = useState("");
  const [singleImage, setSingleImage] = useState(null);
  const [arrayImage, setArrayImage] = useState([]);

  // Methods
  const handleSubmit = async (event) => {
    event.preventDefault();
    let request = await getImage(input);
    console.log(request);
    if (request) setArrayImage(request.hits);
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

        <div className="imageContainer">
          {arrayImage.map((value, key) => (
            <Image image={value} imageKey={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
