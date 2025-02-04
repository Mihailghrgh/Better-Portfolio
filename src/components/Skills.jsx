import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle title='Tech Stack'/>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((card) => {
          return <SkillsCard key={card.id} {...card} />;
        })}
      </div>
      
    </section>
  );
};
export default Skills;
