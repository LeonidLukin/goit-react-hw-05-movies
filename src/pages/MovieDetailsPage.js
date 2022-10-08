import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import { getMovieDetails } from 'API/themoviedb-service';
import MovieDetails from 'components/MovieDetails';
import Loader from 'components/Loader';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movieInfo = {
          title: original_title,
          genres: genres,
          description: overview,
          poster: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        };

        return setMovieInfo(movieInfo);
      },
    );
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default MovieDetailsPage;
