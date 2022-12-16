import { useRouter } from "next/router";
import requests from "../utilities/requests";

const Navbar = () => {
  const router = useRouter();

  //   console.log(router);

  return (
    <nav className="relative">
      <div className="flex  md:px-5 px-10 space-x-5 whitespace-nowrap cursor-pointer overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h1
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="text-2xl active:text-red-500 transition ease-in-out duration-100 transform hover:scale-125"
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l h-10 w-10 from-[#06202A] " />
    </nav>
  );
};

export default Navbar;
