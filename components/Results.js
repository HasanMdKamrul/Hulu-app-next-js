import Thumbnail from "./Thumbnail";

const Results = ({ movies }) => {
  console.log(movies);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid-cols-1  mx-5 mt-2">
      {movies?.map((movie) => (
        <Thumbnail movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Results;
