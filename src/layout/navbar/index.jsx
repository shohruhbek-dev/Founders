import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo (2).png";
import BarLogo from "../../assets/Logo (5).png"; // hamburger
import Button from "../../components/button";
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-[#EC0000] relative z-50 px-[100px]">
            <div className="flex items-center justify-between py-6">
                <div className="lg:hidden flex items-center gap-3">
                    <button onClick={() => setIsOpen(true)}>
                        <img src={BarLogo} alt="Menu Icon" className="object-contain" />
                    </button>
                </div>

                <Link to="/" className="hidden lg:flex">
                    <div>
                        <img src={Logo} alt="Logo" className="w-[80%] h-auto object-contain" />
                    </div>
                </Link>

                <div className="hidden lg:flex flex-1 justify-center">

                    <ul className="flex items-center gap-[30px] sm:gap-[20px]">
                        <li>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-white uppercase cursor-pointer font-[Aquire]"
                            >
                                Biz haqimizda
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="teachers"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-white uppercase text-sm font-[Aquire] cursor-pointer"
                            >
                                O‘qituvchilarimiz
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="courses"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-white uppercase cursor-pointer font-[Aquire]"
                            >
                                Kurslarimiz
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="books"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-white uppercase text-sm font-[Aquire] cursor-pointer"
                            >
                                Kitoblarimiz
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="faq"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-white uppercase text-sm font-[Aquire] cursor-pointer"
                            >
                                FAQ
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="text-white uppercase text-sm font-[Aquire] cursor-pointer"
                            >
                                Kontakt
                            </ScrollLink>
                        </li>
                    </ul>

                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                    <Link to="/login">
                        <Button title="Kirish" background="bg-white" textColor="text-[#EC0000]" />
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 opacity-70 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`flex flex-col justify-between items-start pr-6 lg:hidden fixed top-0 left-0 h-full font-[Aquire] w-[60%] bg-white text-black shadow-lg transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}

            >
                <div className="py-6 px-5 ml-[85%]">
                    <button onClick={() => setIsOpen(false)} className="text-black text-3xl">
                        <i className="fa-solid fa-x"></i>
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-8">
                    <li>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="uppercase text-2xl font-semibold hover:underline cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Biz haqimizda
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="teachers"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="uppercase text-2xl font-semibold hover:underline cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            O‘qituvchilarimiz
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="courses"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="uppercase text-2xl font-semibold hover:underline cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Kurslarimiz
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="books"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="uppercase text-2xl font-semibold hover:underline cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Kitoblarimiz
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="faq"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="uppercase text-2xl font-semibold hover:underline cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="uppercase text-2xl font-semibold hover:underline cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </ScrollLink>
                    </li>
                </ul>


                <h1 className="textGrow font-[Andasia Personal Use] font-normal text-[26px] px-10 leading-[100%] tracking-normal">
                    We grow together!
                </h1>
            </div>
        </div>
    );
}

export default Navbar;
