import requests from "../utilities/requests";

const Navbar = () => {
  return (
    <div className="flex md:px-5 px-10 space-x-5 whitespace-nowrap cursor-pointer overflow-x-scroll scrollbar-hide">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h1 className="text-2xl active:text-red-500 transition duration-100 transform hover:scale-125">
          {title}
        </h1>
      ))}
    </div>
  );
};

export default Navbar;
