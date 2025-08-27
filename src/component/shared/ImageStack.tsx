import React from "react";

interface ImageStackProps {
  indexes: number[];
}

const ImageStack: React.FC<ImageStackProps> = ({ indexes }) => {
  const images = [
    { index: 1, src: "/Avatar1.webp" },
    { index: 2, src: "/Avatar2.webp" },
    { index: 3, src: "/Avatar3.webp" },
    { index: 4, src: "/Avatar4.webp" },
    { index: 5, src: "/Avatar5.webp" },
  ];

  const filteredImages = indexes
    .map((index) => images.find((image) => image.index === index))
    .filter((image) => image !== undefined)
    .slice(0, 5);

  return (
    <div className="flex">
     
      {filteredImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          className={`md:h-[2.15vw] h-5 md:w-[2.15vw] w-5 ${
            index > 0 ? "md:-ml-[.75vw] -ml-2" : ""
          } rounded-full border-2 border-[#052557]`}
          alt="Image"
        />
      ))}
    </div>
  );
};

export default ImageStack;
