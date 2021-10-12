import { Movie, selectSearchMoviesTitle } from '../../store';
import { MoviesList } from './StyledMoviesList';
import { MovieItem } from '..';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';

interface MoviesSearchListProps {
	movies: Array<Movie>;
}

export const MoviesSearchList: FC<MoviesSearchListProps> = ({ movies }) => {
	const title = useAppSelector(selectSearchMoviesTitle);

	const noResults =
		title && movies.length === 0 ? <p>No movies was found!</p> : null;

	return (
		<MoviesList>
			{movies.length !== 0
				? movies.map((movie: Movie) => (
						<li key={movie.id}>
							<MovieItem movie={movie} />
						</li>
				  ))
				: noResults}
		</MoviesList>
	);
};
