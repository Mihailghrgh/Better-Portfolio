import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align element grid md:grid-cols-2 items-start place-items-start gap-24">
        <img
          src={aboutSvg}
          className="w-full h-64 justify-center text-center"
        />
        <article className="text-start max-w-lg">
          <SectionTitle title="About Me" />
          <p className="text-slate-800 my-8 mr leading-loose">
            I’m a front-end developer skilled in React, TypeScript, and modern
            web tools. This portfolio showcases my projects and expertise in
            React Query, TailwindCSS, UI libraries, mapping tools, and more. I
            focus on building fast, scalable, and user-friendly applications.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
