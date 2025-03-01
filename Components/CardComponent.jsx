import React from "react";
import ButtonComponent from "./ButtonComponent";

const CardComponent = ({ image, title, description, price }) => {
  return (
    <div className="w-[600px] h-[500px] bg-pink-200 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 hover:bg-pink-300">
      <img src={image} alt={title} className="w-full h-56 rounded-md object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-lg font-semibold text-pink-700 mt-2">Starts From INR {price}</p>
        <ButtonComponent text="Click Here" />
      </div>
    </div>
  );
};

export default CardComponent;
