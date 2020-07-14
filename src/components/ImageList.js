import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = ({ images }) => {
  const imagenes = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imagenes}</div>;
};

export default ImageList;
