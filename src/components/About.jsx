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
            Versatile digital marketer and Full-Stack Developer with 4+ years of
            experience in marketing and a strong technical foundation in modern
            web development (JavaScript, TypeScript, React, Node.js). I combine
            hands-on experience in SEO, data analytics, and campaign performance
            with the ability to build full-scale web applications. My recent
            freelance projects have allowed me to apply both creative and
            technical skills to solve real business challenges. I`m looking to
            join a team where I can contribute across digital strategy, user
            experience, and technology.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
