import React from "react";
import mainPic from "/src/assets/mainpic.png";

function First() {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 my-[150px] mx-0 gap-8 md:gap-10">
            <div className="flex flex-col justify-between items-start gap-4 md:gap-5 text-center md:text-left flex-[0.9]">
                <h1 className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Biz millatlarga umumiy tilda muloqot qilishiga yordam beramiz!
                </h1>
                <p className="font-medium text-base sm:text-lg md:text-xl">
                    <b>Founders School</b> shu vaqtgacha <b>2 000+</b> o‘quvchilarni hayotini o‘zgartirishga o‘z hissasini qo‘shgan!
                </p>

                <button
                    className="text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all duration-200 font-medium text-base sm:text-lg md:text-xl py-2 sm:py-3 px-5 sm:px-6 rounded-lg"
                >
                    Birinchi darsga yozilish
                </button>
            </div>

            <div className="relative flex-[1.1] flex items-center justify-center">
                <div className="relative rounded-[20px] w-[280px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[700px] h-[280px] sm:h-[400px] md:h-[500px] lg:h-[650px] xl:h-[700px] overflow-hidden shadow-lg z-10">
                    <img
                        src={mainPic}
                        alt="image_main"
                        className="rounded-[20px] object-cover w-full h-full"
                    />
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-0">
                    <div className="absolute w-[100%] h-[100%] border-2 border-red-600 rounded-[70px] rotate-10"></div>
                    <div className="absolute w-[100%] h-[100%] border-2 border-red-600 rounded-[70px] -rotate-10"></div>
                </div>
            </div>
        </div>
    );
}

export default First;
