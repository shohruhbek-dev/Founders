import About from "../../components/cards/about";
import Books from "../../components/cards/books";
import Course from "../../components/cards/coursesCard";
import FAQ from "../../components/cards/faq";
import First from "../../components/cards/firstLesson";
import InfoCard from "../../components/cards/infoCard";
import News from "../../components/cards/news";
import Teachers from "../../components/cards/teacherCard";

function Home() {
    return (
        <>
            <First />

            <InfoCard />

            <About />

            <Teachers />

            <Course />

            <Books />

            <News />

            <FAQ />
        </>
    )
}
export default Home;