import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teacher1 from "/src/assets/tech1.png";
import Teacher2 from "/src/assets/tech2.png";
import Teacher3 from "/src/assets/tech3.png";
import Teacher4 from "/src/assets/tech4.png";
import Teacher5 from "/src/assets/tech5.png";
import Teacher6 from "/src/assets/tech6.png";
import Teacher7 from "/src/assets/tech7.png";
import Teacher8 from "/src/assets/tech8.png";
import Teacher9 from "/src/assets/tech9.png";
import TeacherCard from "./component/index";

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
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div id='teachers' className="container m-auto relative text-center">
            <h1
                data-aos='fade-up'
                className="text-[#EC0000] font-bold max-[400px]:text-3xl text-4xl sm:text-6xl xl:text-[80px] tracking-normal font-[Aquire]">
                O‘qituvchilarimiz:
            </h1>
            <div className="mt-8 relative min-[350px]:ml-4 min-[380px]:ml-8 min-[420px]:ml-12 min-[460px]:ml-18 min-[510px]:ml-28 min-[560px]:ml-36 sm:ml-0 md:ml-12 lg:ml-0 xl:ml-28">
                <Slider {...settings}>
                    {teachersData.map((item, index) => (
                        <div
                            data-aos='zoom-in'
                            key={index}
                            className="px-4">
                            <TeacherCard
                                img={item.img}
                                teacher={item.teacher}
                                IELTS={item.IELTS}
                                Experience={item.Experience}
                                position={item.position}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Teachers;