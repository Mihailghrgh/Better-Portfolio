import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-slate-500">
      <div className="align-element flex flex-col sm:flex-row  sm:items-center sm:py-8 sm:ml-auto md:ml-auto">
        <h2 className="text-3xl font-bold text-white ">
          Web<span className="text-slate-900">Dev</span>
        </h2>
        <div className="gap-3 flex md:ml-auto sm:ml-auto">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="tracking-wide capitalize text-lg hover:text-slate-800  duration-300 "
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
