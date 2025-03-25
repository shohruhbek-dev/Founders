import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import '@splidejs/splide/css/core'

import news1 from "/src/assets/news1.png";
import news2 from "/src/assets/news2.png";
import news3 from "/src/assets/news3.png";
import kid from "/src/assets/kid.png";
import news4 from "/src/assets/news4.png";
import Aos from "aos";

function News() {
    const imgs = [news1, news2, news3, news4, kid];
    useEffect(() => {
        Aos.init({
            duration: 800,
        });
        Aos.refresh();
    }, []);

    return (
        <div className="news px-6 mt-[20px] bg-gray-50 flex flex-col items-center">

            <h1
                data-aos='fade-up'
                className="text-[#EC0000] my-[20px] font-bold text-4xl sm:text-6xl xl:text-[80px] leading-[100%] tracking-normal font-[Aquire] text-center">
                Qaynoq yangiliklar:
            </h1>

            <div
                data-aos='zoom-in'
                className="w-full">
                <Splide
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        autoplay: true,
                        interval: 3000,
                        pauseOnHover: false,
                        resetProgress: false,
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
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="max-w-[250px] w-full 2xl:max-w-[300px] h-auto rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 p-4 flex items-center justify-center">
                                    <img
                                        src={item}
                                        alt={`News ${index + 1}`}
                                        className="w-[400px] h-[300px] rounded-[40px]"
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
