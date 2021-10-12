import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
	changeMovieRating,
	clearMovieDetails,
	fetchSingleMovieDetails,
	fetchSingleMovieDetailsRating,
	rateMovie,
	removeRating,
	selectMovieDetailsMovie,
	selectMovieDetailsMovieCleared,
} from '../store';

export const useMovieDetails = (movieId: number) => {
	const dispatch = useAppDispatch();

	const movie = useAppSelector(selectMovieDetailsMovie);
	const cleared = useAppSelector(selectMovieDetailsMovieCleared);

	useEffect(() => {
		if (movieId) {
			dispatch(fetchSingleMovieDetails(movieId));
			dispatch(fetchSingleMovieDetailsRating(movieId));
		}
	}, [dispatch, movieId]);

	const handleAddRating = useCallback(
		(newRating: number) => {
			dispatch(rateMovie(movieId, newRating));
		},
		[dispatch, movieId],
	);

	const handleChangeRating = useCallback(
		(newRating: number) => {
			dispatch(changeMovieRating(movieId, newRating));
		},
		[dispatch, movieId],
	);

	const handleRemoveRating = useCallback(() => {
		dispatch(removeRating(movie.rating.id));
	}, [dispatch, movie.rating.id]);

	useEffect(() => {
		return () => {
			if (!cleared) {
				dispatch(clearMovieDetails());
			}
		};
	}, [dispatch, cleared]);

	return { movie, handleAddRating, handleChangeRating, handleRemoveRating };
};
