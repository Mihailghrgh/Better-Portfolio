import ProjectCard from "./ProjectCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import { useFetchProjects } from "./FetchProjects";

const Projects = () => {
  const { isLoading, data } = useFetchProjects();
  if (isLoading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle title="Web projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {data.map((item) => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
