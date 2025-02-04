const SkillsCard = ({ text, title, icon }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-600">{text}</p>
    </article>
  );
};
export default SkillsCard;
