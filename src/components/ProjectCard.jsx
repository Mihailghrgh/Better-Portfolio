import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const gitUrl = "https://github.com/Mihailghrgh";

const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-800 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url} target="blank">
            <TbWorldWww className="h-8 w-8 text-slate-1000 hover:text-slate-500" />
          </a>
          <a href={gitUrl} target="blank">
            <FaGithubSquare className="h-8 w-8 text-slate-1000 hover:text-slate-500" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
