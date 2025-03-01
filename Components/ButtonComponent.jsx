import React from "react";

const ButtonComponent = ({ text }) => {
  return (
    <button className="bg-pink-600 text-white font-bold px-6 py-3 rounded-lg mt-4 hover:bg-pink-700 active:bg-pink-800 transition">
      {text}
    </button>
  );
};

export default ButtonComponent;
