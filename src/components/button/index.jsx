import React from "react";

function Button({ title, onClick, background = "red-600" , textColor}) {
  return (
    <button
      onClick={onClick}
      className={`btn montserrat_font_400 ${textColor} ${background} font-medium rounded-[10px] px-[50px] py-[10px]`}
    >
      {title}
    </button>
  );
}

export default Button;
