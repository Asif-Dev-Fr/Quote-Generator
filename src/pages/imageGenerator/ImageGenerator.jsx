import React, { useState } from "react";
import { useEffect } from "react";
import { getImage } from "../../api/api";
import Image from "../../components/Image";

const ImageGenerator = ({ input }) => {
  const [singleImage, setSingleImage] = useState(null);
  const [arrayImage, setArrayImage] = useState([]);

  // Methods
  const fetchImage = async () => {
    let request = await getImage(input);
    console.log(request);
    if (request) setArrayImage(request.hits);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="imageGeneratorContainer">
      <div className="imageGenerator">
        <div className="imageContainer">
          {arrayImage.map((value, key) => (
            <Image image={value} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
