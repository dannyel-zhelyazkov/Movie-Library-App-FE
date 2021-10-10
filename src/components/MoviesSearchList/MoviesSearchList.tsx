import { SearchMovieItem } from '../../store';
import { MoviesList } from './StyledMoviesList';
import { MovieItem } from '..';
import { FC } from 'react';

interface MoviesSearchListProps {
	movies: Array<SearchMovieItem>;
}

export const MoviesSearchList: FC<MoviesSearchListProps> = ({ movies }) => {
	return (
		<MoviesList>
			{movies
				? movies.map((movie: SearchMovieItem) => (
						<li key={movie.id}>
							<MovieItem movie={movie} />
						</li>
				  ))
				: null}
		</MoviesList>
	);
};
