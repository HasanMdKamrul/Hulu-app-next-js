const api_key = process.env.API_KEY;

const requests = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${api_key}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${api_key}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${api_key}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${api_key}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  },
  fetchMystrey: {
    title: "Mystrey",
    url: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  },
  fetchScifi: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${api_key}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${api_key}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${api_key}&with_genres=16`,
  },
  fetchTvMovie: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${api_key}&with_genres=10770`,
  },
};

export default requests;
