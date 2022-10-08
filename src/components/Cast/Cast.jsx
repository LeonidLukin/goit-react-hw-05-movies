import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'API/themoviedb-service';
import ActorsList from 'components/ActorsList';
import Container from 'components/Container';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => {
      const actorsArr = [];

      cast.map(({ id, name, profile_path }) => {
        const actor = {
          id,
          name,
          photo: profile_path,
        };

        return actorsArr.push(actor);
      });

      setActors(actorsArr);
    });
  }, [movieId]);

  return actors && actors.length > 0 ? (
    <ActorsList actors={actors} />
  ) : (
    <Container isPadding>
      <h2>We don't have any actors for this movie.</h2>
    </Container>
  );
}

export default Cast;
