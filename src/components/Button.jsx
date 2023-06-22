import React from "react";

const Button = ({ styles }) => {
  const handleButtonClick = () => {
    window.open("https://iapoteka.ba", "_blank");
  };

  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      onClick={handleButtonClick}
    >
      Naruči Ovdje
    </button>
  );
};

export default Button;
