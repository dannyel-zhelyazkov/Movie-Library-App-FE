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
		isLoading,
		cleared,
		initialLoad,
		favorites,
		typedTitle,
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
			!isLoading && !typedTitle && favorites.length === 0 ? (
				<p>No favorite movies with this name!</p>
			) : null,
		[isLoading, typedTitle, favorites.length],
	);

	useEffect(() => {
		if (cleared && noResults && !initialLoad) {
			dispatch(fetchFavorites(1));
		}
	}, [dispatch, cleared, noResults, initialLoad]);

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
