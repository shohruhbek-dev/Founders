import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import news1 from "/src/assets/news1.png";
import news2 from "/src/assets/news2.png";
import news3 from "/src/assets/news3.png";
import kid from "/src/assets/kid.png";
import news4 from "/src/assets/news4.png";

function News() {
    const imgs = [news1, news2, news3, news4, kid];

    return (
        <div className="w-full min-h-screen px-6 py-16 mt-[20px] bg-gray-50 flex flex-col items-center">
        
            <h1 className="text-[#EC0000] my-[20px] font-bold text-[96px] leading-[100%] tracking-normal font-[Aquire] text-center">
            Qaynoq yangiliklar:            </h1>

            <div className="w-full">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        autoplay: true,
                        interval: 3000,
                        arrows: false,
                        pagination: false,
                        speed: 1000,
                        gap: "1.5rem",
                        breakpoints: {
                            1280: { perPage: 3 },
                            768: { perPage: 2 },
                            480: { perPage: 1 },
                        },
                    }}
                    className="py-5"
                >
                    {imgs.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="w-full h-full flex justify-center items-center py-[20px]">
                                <div className="w-full h-[400px] bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-4 flex items-center justify-center">
                                    <img
                                        src={item}
                                        alt={`News ${index + 1}`}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default News;
