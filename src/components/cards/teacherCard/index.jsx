import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Teacher1 from "/src/assets/tech1.png";
import Teacher2 from "/src/assets/tech2.png";
import Teacher3 from "/src/assets/tech3.png";
import Teacher4 from "/src/assets/tech4.png";
import Teacher5 from "/src/assets/tech5.png";
import Teacher6 from "/src/assets/tech6.png";
import Teacher7 from "/src/assets/tech7.png";
import Teacher8 from "/src/assets/tech8.png";
import Teacher9 from "/src/assets/tech9.png";

import TeacherCard from './component/inndex';

const teachersData = [
    { img: Teacher1, teacher: "Iskhakova Leyla", Experience: "4 years+", IELTS: "7.0", position: "ESL Teacher | IELTS Instructor" },
    { img: Teacher2, teacher: "Kambarova Omina", Experience: "2 years+", position: "ESL Teacher" },
    { img: Teacher3, teacher: "Yusupov Bunyodbek", Experience: "1 years+", IELTS: "7.5", position: "ESL Teacher" },
    { img: Teacher4, teacher: "Abdumalikova Parizoda", Experience: "7 years+", position: "ESL Teacher" },
    { img: Teacher5, teacher: "Asadova Zarina", Experience: "15 years+", position: "Senior ESL Teacher" },
    { img: Teacher6, teacher: "Karajanova Kamila", Experience: "2.5 years+", position: "ESL Teacher" },
    { img: Teacher7, teacher: "Abatbaeva Sarbina", Experience: "2.5 years+", IELTS: "7.0", position: "ESL Teacher" },
    { img: Teacher8, teacher: "Soatmurodova Dinora", Experience: "2.5 years+", IELTS: "7.5", position: "ESL Teacher" },
    { img: Teacher9, teacher: "Yusupova Sarvinoz", IELTS: "7.5", Experience: "1.5 years+", position: "ESL Teacher" },
];

function Teachers() {
    return (
        <div id='teachers' className="py-8 relative">
            <h1 className="text-[#EC0000] font-bold text-[80px] leading-[100%] tracking-normal font-[Aquire] text-center">
                O‘qituvchilarimiz:</h1>
            <Swiper
                loop={true}
                centeredSlides={true}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
            >
                {teachersData.map((item, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <TeacherCard
                                img={item.img}
                                teacher={item.teacher}
                                IELTS={item.IELTS}
                                Experience={item.Experience}
                                position={item.position}
                                isActive={isActive}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Swiper navigation buttons */}
            <style jsx>{`
                .swiper-button-next, .swiper-button-prev {
                    background: #EC0000;
                    color: #fff;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .swiper-button-next:hover, .swiper-button-prev:hover {
                    background: #c20000;
                }
                .swiper-button-next::after, .swiper-button-prev::after {
                    font-size: 16px;
                }
            `}</style>
        </div>
    );
}

export default Teachers;
