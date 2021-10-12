import { debounce } from 'lodash';
import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import {
	addNotes,
	changeMovieRating,
	changeNotes,
	clearMovieDetails,
	fetchNotes,
	fetchSingleMovieDetails,
	fetchSingleMovieDetailsRating,
	rateMovie,
	removeNotes,
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
			dispatch(fetchNotes(movieId));
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
		if (movie.rating.id) {
			dispatch(removeRating(movie.rating.id));
		}
	}, [dispatch, movie.rating.id]);

	const handleChangeNotes = useMemo(
		() =>
			debounce((value: string) => {
				if (value) {
					if (!movie.notes.notes) {
						dispatch(addNotes(movieId, value));
						return;
					}

					dispatch(changeNotes(movieId, value));
					return;
				}

				if (movie.notes.id) {
					dispatch(removeNotes(movie.notes.id));
				}
			}, 1000),
		[dispatch, movieId, movie.notes.notes, movie.notes.id],
	);

	useEffect(() => {
		return () => {
			if (!cleared) {
				dispatch(clearMovieDetails());
				handleChangeNotes.cancel();
			}
		};
		// eslint-disable-next-line
	}, [dispatch, cleared]);

	return {
		movie,
		handleAddRating,
		handleChangeRating,
		handleRemoveRating,
		handleChangeNotes,
	};
};
