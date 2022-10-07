async function getMovieDetails(movieId) {
  const key = '8ac923aa1ed740356f073e222b9dc2ec';
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getMovieDetails;
