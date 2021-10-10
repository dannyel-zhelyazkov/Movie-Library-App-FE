import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
	addToFavorites,
	fetchFavorites,
	removeFromFavorites,
	selectFavoritesPage,
	selectFavoritesTotalPages,
} from '../store';

export const useFavorites = () => {
	const dispatch = useAppDispatch();

	const page = useAppSelector(selectFavoritesPage);
	const totalPages = useAppSelector(selectFavoritesTotalPages);

	const handleChangeFavoritesPage = useCallback(
		(newPage: number) => {
			dispatch(fetchFavorites(newPage));
		},
		[dispatch],
	);

	const handleAddToFavorites = useCallback(
		(movieId: string, title: string, poster: string) => {
			dispatch(addToFavorites(movieId, title, poster));
		},
		[dispatch],
	);

	const handleRemoveFromFavorites = useCallback(
		(id: string) => {
			dispatch(removeFromFavorites(id));
		},
		[dispatch],
	);

	return {
		page,
		totalPages,
		handleChangeFavoritesPage,
		handleAddToFavorites,
		handleRemoveFromFavorites,
	};
};
