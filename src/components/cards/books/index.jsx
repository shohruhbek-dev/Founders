import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Basic Splide styles

import generalBook1 from "/src/assets/generalBook1.png";
import generalBook2 from "/src/assets/generalBook2.png";
import generalBook3 from "/src/assets/generalBook3.png";
import generalBook4 from "/src/assets/generalBook4.png";
import levelBook1 from "/src/assets/levelBook1.png";
import levelBook2 from "/src/assets/levelBook2.png";
import levelBook3 from "/src/assets/levelBook3.png";
import levelBook4 from "/src/assets/levelBook4.png";
import IeltsBook1 from "/src/assets/IeltsBook1.png";
import IeltsBook2 from "/src/assets/IeltsBook2.png";
import IeltsBook3 from "/src/assets/IeltsBook3.png";
import IeltsBook4 from "/src/assets/IeltsBook4.png";

function Books() {
    const imgs = {
        general: [generalBook1, generalBook2, generalBook3, generalBook4],
        level: [levelBook1, levelBook2, levelBook3, levelBook4],
        ielts: [IeltsBook1, IeltsBook2, IeltsBook3, IeltsBook4],
    };

    return (
        <div id="books" className="books px-4 bg-gray-50">
            <h1 className="text-[#EC0000] my-[20px] font-bold text-4xl sm:text-6xl xl:text-[80px] leading-[100%] tracking-normal font-[Aquire] text-center">
                Kitoblarimiz:
            </h1>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 1,
                    pagination: true,
                    arrows: true,
                    gap: '1rem',
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    resetProgress: false,
                    speed: 1200, 
                    easing: 'ease-in-out',
                    breakpoints: {
                        768: { height: 'auto' },
                        1024: { height: '600px' },
                    },
                    height: '700px',
                }}
                className="rounded-2xl px-[30px] custom-splide">

                <SplideSlide>
                    <div className="w-full h-full flex flex-col">
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-[Montserrat] font-medium text-center">General English</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-1">
                            {imgs.general.map((book, index) => (
                                <div key={index} className="w-full h-full">
                                    <img
                                        src={book}
                                        alt={`General Book ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="w-full h-full flex flex-col">
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-[Montserrat] font-medium text-center">IELTS</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-1">
                            {imgs.ielts.map((book, index) => (
                                <div key={index} className="w-full h-full">
                                    <img
                                        src={book}
                                        alt={`IELTS Book ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="w-full h-full flex flex-col">
                        <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-[Montserrat] font-medium text-center">Kids English</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 flex-1">
                            {imgs.level.map((book, index) => (
                                <div key={index} className="w-full h-full">
                                    <img
                                        src={book}
                                        alt={`Level Book ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
           
        </div>
    );
}

export default Books;
