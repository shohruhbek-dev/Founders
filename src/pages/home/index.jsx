import About from "../../components/cards/about";
import Books from "../../components/cards/books";
import Course from "../../components/cards/coursesCard";
import FAQ from "../../components/cards/faq";
import First from "../../components/cards/firstLesson";
import InfoCard from "../../components/cards/infoCard";
import News from "../../components/cards/news";
import Teachers from "../../components/cards/teacherCard";
import TeacherCard from "../../components/cards/teacherCard/component/inndex";
// import Teachers from "../../components/cards/teacherCard";

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
            <About />
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
            <div>
                <FAQ />
            </div>
        </div>
    )
}
export default Home;