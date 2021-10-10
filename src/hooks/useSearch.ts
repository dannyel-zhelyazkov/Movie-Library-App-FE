import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
	clearSearchMovies,
	searchMovie,
	selectSearchMovies,
	selectSearchMoviesIsLoading,
	selectSearchMoviesTitle,
	selectSearchPage,
	selectSearchPages,
} from '../store';

export const useSearch = () => {
	const dispatch = useAppDispatch();

	const isLoading = useAppSelector(selectSearchMoviesIsLoading);
	const movies = useAppSelector(selectSearchMovies);
	const totalPages = useAppSelector(selectSearchPages);
	const page = useAppSelector(selectSearchPage);
	const title = useAppSelector(selectSearchMoviesTitle);

	const [typedTitle, setTypedTitle] = useState<string | null>(null);

	const handleSearchMovies = useCallback(
		async (newPage?: number) => {
			if (title && newPage && newPage !== page) {
				await dispatch(searchMovie(newPage, title));
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				});
				return;
			}

			if (typedTitle && typedTitle !== '' && typedTitle !== title) {
				dispatch(searchMovie(1, typedTitle));
			}
		},
		[dispatch, typedTitle, page, title],
	);

	const handleChangeTypedTitle = useCallback((value: string) => {
		setTypedTitle(value);
	}, []);

	useEffect(() => {
		return () => {
			dispatch(clearSearchMovies());
		};
	}, [dispatch]);

	return {
		isLoading,
		movies,
		totalPages,
		page,
		setTypedTitle,
		handleSearchMovies,
		handleChangeTypedTitle,
	};
};
