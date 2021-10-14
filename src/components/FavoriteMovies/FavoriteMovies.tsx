import { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router';
import { MoviePoster, Pagination } from '..';
import { useAppDispatch, useFavorites } from '../../hooks';
import { FavoriteMovie, fetchFavorites } from '../../store/slices/favorites';
import {
	FavoriteMoviesContainer,
	FavoriteMoviesHeader,
	FavoriteMoviesList,
	FavoriteMovieWrapper,
} from './StyledFavoriteMovies';

export const FavoriteMovies = () => {
	const dispatch = useAppDispatch();
	const { push } = useHistory();
	const {
		error,
		isLoading,
		title,
		edgeLengthChanged,
		cleared,
		initialLoad,
		favorites,
		page,
		totalPages,
		handleChangeFavoritesPage,
	} = useFavorites();

	const handlePushToDetailsPage = useCallback(
		(id: number) => {
			push(`/details/${id}`);
		},
		[push],
	);

	const noResults = useMemo(
		() =>
			error ? (
				error
			) : title && !isLoading && favorites.length === 0 ? (
				<p>No favorite movies with this name!</p>
			) : !isLoading && favorites.length === 0 ? (
				<p>No favorite movies! </p>
			) : null,
		[isLoading, title, favorites.length, error],
	);

	useEffect(() => {
		if ((cleared && noResults && !initialLoad) || edgeLengthChanged) {
			dispatch(fetchFavorites(1));
		}
	}, [dispatch, cleared, noResults, initialLoad, edgeLengthChanged]);

	return (
		<FavoriteMoviesContainer>
			<FavoriteMoviesHeader>Your Favorite</FavoriteMoviesHeader>

			{favorites.length !== 0 ? (
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
			) : (
				noResults
			)}

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
