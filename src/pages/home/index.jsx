import Books from "../../components/cards/books";
import Course from "../../components/cards/coursesCard";
import First from "../../components/cards/firstLesson";
import InfoCard from "../../components/cards/infoCard";
import News from "../../components/cards/news";
import Teachers from "../../components/cards/teacherCard";

function Home() {
    return (
        <div className="w-[100%]">

            <div>
                <First />
            </div>

            <div>
                <InfoCard />
            </div>

            <div>
                <h1 className="text-[#EC0000] font-[Aquire] font-bold text-[96px] leading-[100%] tracking-normal text-center">
                    Biz haqimizda:
                </h1>
                <div className="w-full flex justify-center py-12 bg-gray-100">
                    <div className="w-full max-w-7xl relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                        <iframe
                            src="https://www.youtube.com/embed/z7WIMyySMAE?si=VT8If3_JzDJ4yijV"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
                        ></iframe>
                    </div>
                </div>


                <div className="space-y-6 px-[100px] py-[50px]">
                    <p className="font-[Montserrat] text-[#222222] font-normal text-[36px] leading-[120%] text-center">
                        Founders school is not just a learning center,
                        <span className="font-bold text-[#EC0000]"> it is a huge family. </span>
                        We opened our first doors for students
                        <span className="font-bold text-[#EC0000]"> in 2021, November 8th. </span>
                        Our company was founded by
                        <span className="font-bold text-[#EC0000]"> two friends Ziyodbek Yusupov </span>
                        and
                        <span className="font-bold text-[#EC0000]"> Abduqodir Juraqulov </span>
                        who are
                        <span className="font-bold text-[#EC0000]"> MDIST graduates. </span>
                    </p>

                    <p className="font-[Montserrat] text-[#222222] font-normal text-[36px] leading-[120%] text-center">
                        Our company has taught more than
                        <span className="font-bold text-[#EC0000]"> 2000 students </span>
                        so far and made a huge number of IELTS results with its students,
                        <span className="font-bold text-[#EC0000]"> 7.0+ band scores on average. </span>
                    </p>

                    <p className="font-[Montserrat] text-[#222222] font-normal text-[36px] leading-[120%] text-center">
                        The name "Founders" is not just about two friends, but also it is our
                        <span className="font-bold text-[#EC0000]"> motivated </span>
                        and
                        <span className="font-bold text-[#EC0000]"> passionate </span>
                        <span className="font-bold text-[#EC0000]"> students </span>
                        who will become future
                        <span className="font-bold text-[#EC0000]"> leaders </span>
                        and
                        <span className="font-bold text-[#EC0000]"> founders </span>
                        of successful companies.
                    </p>
                </div>

            </div>

            <div>
                <Teachers />
            </div>
            <div>
                <Course />
            </div>
            <div>
                <Books />
            </div>
            <div>
                <News />
            </div>
        </div>
    )
}
export default Home;