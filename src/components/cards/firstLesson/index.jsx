import React from "react";
import mainPic from "/src/assets/mainpic.png";

function First() {
    return (
        <div className=" w-[100%] h-full flex flex-col-reverse md:flex-row items-center px-4 sm:px-10 md:px-20 my-[150px] mx-0 gap-[2%] ">
            <div className=" w-[40%] flex flex-col justify-between items-start gap-4 md:gap-5 text-center md:text-left">
                <h1 className="text-red-600 text-6xl font-extrabold leading-tight font-[Montserrat]">
                    Biz millatlarga umumiy tilda muloqot qilishiga yordam beramiz!
                </h1>
                <p className="font-medium text-base font-[Montserrat]">
                    <b>Founders School</b> shu vaqtgacha <b>2 000+</b> o‘quvchilarni hayotini o‘zgartirishga o‘z hissasini qo‘shgan!
                </p>

                <button
                    className="text-white font-[Montserrat] bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all duration-200 font-medium text-base sm:text-lg md:text-xl py-2 sm:py-3 px-5 sm:px-6 rounded-lg"
                >
                    Birinchi darsga yozilish
                </button>
            </div>
            <div className="w-[50%] h-[100%] relative flex items-center justify-center">
                <div className="relative rounded-[50px] w-full h-[100%] overflow-hidden z-3 flex items-center justify-center">
                    <img
                        src={mainPic}
                        alt="image_main"
                        className="rounded-[50px] object-contain max-w-full max-h-full"
                    />
                </div>

                {/* Border Circles */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
                    <div className="absolute w-[100%] h-[100%] border-2 border-red-600 rounded-[50px] rotate-20"></div>
                    <div className="absolute w-[100%] h-[100%] border-2 border-red-600 rounded-[50px] -rotate-20"></div>
                </div>
            </div>




        </div>
    );
}

export default First;
