import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { MoviePoster } from '..';
import { Pagination } from '../Pagination';
import {
	FavoriteMoviesContainer,
	FavoriteMoviesHeader,
	FavoriteMoviesList,
	FavoriteMovieWrapper,
} from './StyledFavoriteMovies';

export const FavoriteMovies = () => {
	const { push } = useHistory();

	const handlePushToDetailsPage = useCallback(
		(id: number) => {
			push(`/details/${id}`);
		},
		[push],
	);

	return (
		<FavoriteMoviesContainer>
			<FavoriteMoviesHeader>Your Favorite</FavoriteMoviesHeader>
			<FavoriteMoviesList container spacing={2}>
				{[1, 2, 3, 4].map((id: number) => (
					<FavoriteMovieWrapper
						item
						xs={6}
						sm={4}
						m={3}
						lg={2}
						onClick={() => handlePushToDetailsPage(id)}>
						<MoviePoster />
					</FavoriteMovieWrapper>
				))}
			</FavoriteMoviesList>
			<Pagination count={10} />
		</FavoriteMoviesContainer>
	);
};
