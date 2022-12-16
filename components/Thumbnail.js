import Image from "next/image";
import { HiOutlineThumbUp } from "react-icons/hi";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

const Thumbnail = ({ movie }) => {
  console.log(movie);

  return (
    <div className="group  ">
      <div>
        <Image
          className="transition-all duration-200 ease-in transform md:group-hover:scale-105 group-hover:z-50"
          layout="responsive"
          src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
          width={100}
          height={100}
        />
      </div>
      <div className="p-2">
        <h2 className="group-hover:text-xl group-hover:font-bold group-hover:text-white transition-all duration-200 ease-in-out">
          {movie.title}
        </h2>
        <p className="truncate">
          {movie.overview
            ? movie.overview.length !== 0 && movie.overview
            : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. "}
        </p>
        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out">
          <HiOutlineThumbUp />
          <p>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
