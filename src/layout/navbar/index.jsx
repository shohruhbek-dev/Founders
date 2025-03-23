import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo (2).png";
import BarLogo from "../../assets/Logo (5).png"; // hamburger
// import BarLogoWhite from "../../assets/Rectangle 3130.png"; // close icon

import Button from "../../components/button";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-[#EC0000] relative z-50 px-[100px]" >
            <div className="flex items-center justify-between py-6 sm:">

                <div className="lg:hidden flex items-center gap-3">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <img
                            src={BarLogo}
                            alt="Menu Icon"
                            className=" object-contain"
                        />
                    </button>
                </div>

                <Link to="/" className="hidden lg:flex">
                    <div >
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-[80%] h-auto object-contain"
                        />
                    </div>
                </Link>

                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex items-center gap-[30px] sm:gap-[20px]">
                        <li>
                            <Link to="#" className="text-white uppercase cursor-pointer">Biz haqimizda</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white uppercase text-sm">O‘qituvchilarimiz</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white uppercase cursor-pointer">Kurslarimiz</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white uppercase text-sm">Kitoblarimiz</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white uppercase text-sm">FAQ</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white uppercase text-sm">Kontakt</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                    <Link to="/login">
                        <Button title="Kirish" background="bg-white" textColor="text-[#EC0000]" />
                    </Link>
                </div>
            </div>

            <div
                className={`lg:hidden fixed top-0 left-0 h-full w-[70%] bg-[#EC0000] shadow-lg transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between py-6 px-5">

                    <button onClick={() => setIsOpen(false)}>
                        <img src={BarLogo} alt="Close Icon" className="" />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-5 pt-4">
                    <li>
                        <Link to="#" className="text-white uppercase text-lg font-semibold hover:underline">Biz haqimizda</Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white uppercase text-lg font-semibold hover:underline">O‘qituvchilarimiz</Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white uppercase text-lg font-semibold hover:underline">Kurslarimiz</Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white uppercase text-lg font-semibold hover:underline">Kitoblarimiz</Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white uppercase text-lg font-semibold hover:underline">FAQ</Link>
                    </li>
                    <li>
                        <Link to="#" className="text-white uppercase text-lg font-semibold hover:underline">Kontakt</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
