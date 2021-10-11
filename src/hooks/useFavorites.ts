import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
	addToFavorites,
	clearTitle,
	fetchFavorites,
	removeFromFavorites,
	selectFavorites,
	selectFavoritesCleared,
	selectFavoritesInitialLoad,
	selectFavoritesIsLoading,
	selectFavoritesPage,
	selectFavoritesTitle,
	selectFavoritesTotalPages,
} from '../store';

export const useFavorites = () => {
	const dispatch = useAppDispatch();

	const isLoading = useAppSelector(selectFavoritesIsLoading);
	const cleared = useAppSelector(selectFavoritesCleared);
	const initialLoad = useAppSelector(selectFavoritesInitialLoad);
	const favorites = useAppSelector(selectFavorites).favorites;
	const title = useAppSelector(selectFavoritesTitle);
	const page = useAppSelector(selectFavoritesPage);
	const totalPages = useAppSelector(selectFavoritesTotalPages);

	const [typedTitle, setTypedTitle] = useState<string | undefined>(undefined);

	const handleSearchFavorites = useCallback(async () => {
		if (typedTitle && typedTitle !== title) {
			await dispatch(fetchFavorites(1, typedTitle));
		}
	}, [dispatch, title, typedTitle]);

	const handleChangeFavoritesPage = useCallback(
		(newPage: number) => {
			if (title) {
				dispatch(fetchFavorites(newPage, title));
				return;
			}

			dispatch(fetchFavorites(newPage));
		},
		[dispatch, title],
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

	const handleChangeTypedTitle = useCallback((value: string) => {
		setTypedTitle(value);
	}, []);

	useEffect(() => {
		return () => {
			if (title) {
				setTypedTitle(undefined);
				dispatch(clearTitle());
			}
		};
	}, [dispatch, title]);

	return {
		isLoading,
		cleared,
		initialLoad,
		favorites,
		typedTitle,
		page,
		totalPages,
		handleSearchFavorites,
		handleChangeFavoritesPage,
		handleAddToFavorites,
		handleRemoveFromFavorites,
		handleChangeTypedTitle,
	};
};
