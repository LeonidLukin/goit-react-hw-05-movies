import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */),
);

export default function App() {
  return (
    <>
      <Header title="7films" />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
