import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-slate-500 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Mihail</h1>
          <p className="mt-4 text-3xl text-slate-900 tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-900 tracking-wide">
            {" "}
            Making your ideas into advanced Apps
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Mihailghrgh" target="blank">
              <FaGithubSquare className="h-8 w-8 text-slate-900 hover:text-white duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/gheorghe-mihail-1558191a4/"
              target="blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-900 hover:text-white duration-300" />
            </a>
            <a href="https://www.instagram.com/michael.99_/" target="blank">
              <FaInstagram className="h-8 w-8 text-slate-900 hover:text-white duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
