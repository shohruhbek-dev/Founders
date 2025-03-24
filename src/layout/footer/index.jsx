import { Link } from "react-router-dom";
import Logo from "../../assets/logof.png";


function Footer() {
    return (
        <footer id="contact" className="bg-[#EC0000] text-white text-center py-10 xl:px-[110px] rounded-tl-[10px] rounded-tr-[10px]">
            <h1 className="textGrow font-[Andasia Personal Use] font-normal text-4xl xl:text-[128px] leading-[100%] text-center">
                We grow together!
            </h1>

            <div className="h-[400px] w-[100%] mx-auto mt-10 border-none overflow-hidden rounded-[30px]  shadow-[20px_20px_25px_0px_#00000040]">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11979.1754389799!2d69.236541!3d41.306471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzIzLjMiTiA2OcKwMTQnMTEuNiJF!5e0!3m2!1sen!2s!4v1711100880000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    className=""
                ></iframe>
            </div>

            <div className="flex items-center justify-between gap-10 mt-10">
                <Link to="/" className="hidden lg:flex">
                    <div >
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-[80%] h-auto object-contain"
                        />
                    </div>
                </Link>
                <div className="flex flex-col gap-3 text-[26px] font-[montserrat]">
                    <p>Biz bilan bog‘lanish:</p>
                    <a href="tel: +998 71 205-53-33 ">+998 71 205-53-33</a>
                </div>

                <div id="contact" className="flex flex-col gap-3 text-[26px]">
                    <p>Ijtimoiy tarmoqlarimiz:</p>
                    <div className="flex gap-3 justify-center items-center">
                        <a target="_blank" rel="noopener noreferrer" href="https://t.me/founders_school_uz"><i className="fa-brands fa-telegram"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/founders_school?igsh=ZzZ1N3dkMWlkYWJ4"><i className="fa-brands fa-instagram"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@founders_school?si=K9zOe7AUjrbLbJsy"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;