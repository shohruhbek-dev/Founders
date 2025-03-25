import React from "react";

function Button({ title, onClick, background = "red-600" , textColor}) {
  return (
    <button
      onClick={onClick}
      className={`btn montserrat_font_400 ${textColor} ${background} py-1.5 px-5 text-[14px] font-medium rounded-[10px] min-[450px]:px-[50px] min-[550px]:py-[10px] min-[550px]:text-2xl`}>
      {title}
    </button>
  );
}

export default Button;
