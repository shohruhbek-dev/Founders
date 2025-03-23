
import CourseCard from "./components";

import kid from "/src/assets/kid.png";
import advanced from "/src/assets/advanced.png";
import reading from "/src/assets/reading.png";

const courseFromData = [
  {
    title: "Kids English",
    img: kid,
    timeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Free Sunday Events",
    spanTitle: `(har hafta o‘tqaziladigan tadbirlar)`,
    spanParagrfBold: "Diary",
    spanParagrf: `(uyga vazifalarni ko‘rib borish va imtihon natijalarini ko‘rib borish uchun)`,
    cabinetBold: "Shaxsiy kabinet",
    cabinet: `(ota-onalar nazorati uchun shaxsiy kabinet)`,
  },

  {
    title: "General English",
    img: advanced,
    timeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Umumiy 6 daraja",
    spanTitle: `(Beginnerdan 
    Advancedgacha, har biri 3 oy davom etadi)`,
    spanParagrfBold: "Free Sunday Events",
    spanParagrf: `(har hafta o‘tqaziladigan tadbirlar)`,
    cabinetBold: "Shaxsiy kabinet",
    cabinet: `(ota-onalar nazorati uchun shaxsiy kabinet)`,
  },

  {
    title: "IELTS",
    img: reading,
    timeBold: "30 soatlik darslar",
    courseTime: `(asosiy darslar: haftasiga 2 soat / 3 marta Academic support: haftasiga 2 marta / 30 min)`,
    teacherBold: "Ikkita o‘qituvchi",
    teacher: `(asosiy o‘qituvchidan tashqari Support teacher mavjud)`,
    spanTitleBold: "Free Sunday Events",
    spanTitle: `(har hafta o‘tqaziladigan tadbirlar)`,
    spanParagrfBold: "Bepul konsultatsiya",
    spanParagrf: `(IELTS topshirishdan oldin beriladigan foydali tavsiyalar)`,
    cabinetBold: "Bepul Mock Exam",
    cabinet: `(Mock Examni bepul topshirish)`,
  },
];

function Course() {
  return (
    <div>

      <h1 id="courses" className="text-[#EC0000] my-[30px] font-bold text-[96px] leading-[100%] tracking-normal font-[Aquire] text-center">
        Kurslarimiz:</h1>
      <div className="mb-10 px-[20px] flex md:flex-row flex-col gap-6">

        {courseFromData &&
          courseFromData.map((item) => <CourseCard key={item.title} {...item} />)}
      </div>
    </div>
  );
}

export default Course;
