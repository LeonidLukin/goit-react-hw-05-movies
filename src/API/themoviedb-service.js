const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8ac923aa1ed740356f073e222b9dc2ec';

async function getResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits`;
  const filter = `?api_key=${API_KEY}&language=en-US`;

  const data = await getResource(`${url}${filter}`);

  return data;
}

export async function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}`;
  const filter = `?api_key=${API_KEY}&language=en-US`;

  const data = await getResource(`${url}${filter}`);

  return data;
}

export async function getMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews`;
  const filter = `?api_key=${API_KEY}&language=en-US&page=1`;

  const data = await getResource(`${url}${filter}`);

  return data;
}

export async function getSearchMovies(query, page = 1) {
  const url = `${BASE_URL}/search/movie`;
  const filter = `?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const data = await getResource(`${url}${filter}`);

  return data;
}

export async function getTrending() {
  const url = `${BASE_URL}/trending/all/day`;
  const filter = `?api_key=${API_KEY}`;

  const data = await getResource(`${url}${filter}`);

  return data;
}
