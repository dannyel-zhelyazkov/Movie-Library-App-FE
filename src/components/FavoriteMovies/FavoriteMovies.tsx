import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { MoviePoster } from '..';
import { useAppDispatch, useAppSelector, useFavorites } from '../../hooks';
import { fetchFavorites, selectFavorites } from '../../store';
import { FavoriteMovie } from '../../store/slices/favorites/types';
import { Pagination } from '../Pagination';
import {
	FavoriteMoviesContainer,
	FavoriteMoviesHeader,
	FavoriteMoviesList,
	FavoriteMovieWrapper,
} from './StyledFavoriteMovies';

export const FavoriteMovies = () => {
	const { push } = useHistory();
	const dispatch = useAppDispatch();
	const { page, totalPages, handleChangeFavoritesPage } = useFavorites();

	const favorites = useAppSelector(selectFavorites).favorites;

	useEffect(() => {
		dispatch(fetchFavorites(1));
	}, [dispatch]);

	const handlePushToDetailsPage = useCallback(
		(id: number) => {
			push(`/details/${id}`);
		},
		[push],
	);

	return (
		<FavoriteMoviesContainer>
			<FavoriteMoviesHeader>Your Favorite</FavoriteMoviesHeader>
			<FavoriteMoviesList container spacing={{ xs: 0, lg: 2 }}>
				{favorites.map((favorite: FavoriteMovie) => (
					<FavoriteMovieWrapper
						key={favorite.id}
						item
						xs={6}
						sm={4}
						m={3}
						lg={2}
						onClick={() => handlePushToDetailsPage(favorite.movieId)}>
						<MoviePoster poster={favorite.poster} />
					</FavoriteMovieWrapper>
				))}
			</FavoriteMoviesList>
			{page !== 0 ? (
				<Pagination
					page={page}
					count={totalPages}
					handleSearchOnPageChange={handleChangeFavoritesPage}
				/>
			) : null}
		</FavoriteMoviesContainer>
	);
};
