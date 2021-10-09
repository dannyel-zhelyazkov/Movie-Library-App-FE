import { useHistory } from 'react-router';
import { MovieItem } from '..';
import { MoviesList } from './StyledMoviesList';

export const MoviesSearchList = () => {
	const { push } = useHistory();

	return (
		<MoviesList>
			{[1, 2, 3].map(() => (
				<li onClick={() => push('/details/asd')}>
					<MovieItem />
				</li>
			))}
		</MoviesList>
	);
};
