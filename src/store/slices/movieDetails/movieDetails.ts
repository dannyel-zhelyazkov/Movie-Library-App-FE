import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, Movie, RootState } from '../..';
import { client } from '../../../client';
import { MovieDetailsState, Rating } from './types';

const initialState: MovieDetailsState = {
	isLoading: false,
	movie: {
		movieDetails: null,
		rating: {
			id: null,
			rating: null,
		},
		notes: {
			id: null,
			notes: null,
		},
	},
	error: null,
	cleared: true,
};

const movieDetailsSlice = createSlice({
	name: 'movieDetails',
	initialState,
	reducers: {
		fetchSingleMovieDetailsStart: (state) => {
			state.isLoading = true;
		},
		fetchSingleMovieDetailsSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.movieDetails = action.payload;
			state.cleared = false;
		},
		fetchSingleMovieDetailsFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		fetchSingleMovieDetailsRatingStart: (state) => {
			state.isLoading = true;
		},
		fetchSingleMovieDetailsRatingSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.rating = action.payload;
		},
		fetchSingleMovieDetailsRatingFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		rateMovieStart: (state) => {
			state.isLoading = true;
		},
		rateMovieSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.rating = action.payload;
		},
		rateMovieFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		changeMovieRatingStart: (state) => {
			state.isLoading = true;
		},
		changeMovieRatingSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.rating.rating = action.payload;
		},
		changeMovieRatingFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		removeRatingStart: (state) => {
			state.isLoading = true;
		},
		removeRatingSuccess: (state) => {
			state.isLoading = false;
			state.movie.rating = initialState.movie.rating;
		},
		removeRatingFailure: (state, action) => {
			state.error = action.payload;
		},
		fetchNotesStart: (state) => {
			state.isLoading = true;
		},
		fetchNotesSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.notes = action.payload;
		},
		fetchNotesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		addNotesStart: (state) => {
			state.isLoading = true;
		},
		addNotesSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.notes = action.payload;
		},
		addNotesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		changeNotesStart: (state) => {
			state.isLoading = true;
		},
		changeNotesSuccess: (state, action) => {
			state.isLoading = false;
			state.movie.notes.notes = action.payload;
		},
		changeNotesFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		removeNotesStart: (state) => {
			state.isLoading = true;
		},
		removeNotesSuccess: (state) => {
			state.isLoading = false;
			state.movie.notes = initialState.movie.notes;
		},
		removeNotesFailure: (state, action) => {
			state.error = action.payload;
		},
		clearMovieDetails: (state) => {
			state.isLoading = initialState.isLoading;
			state.movie = initialState.movie;
			state.error = initialState.error;
			state.cleared = initialState.cleared;
		},
	},
});

export const fetchSingleMovieDetails =
	(movieId: number) => async (dispatch: AppDispatch) => {
		dispatch(fetchSingleMovieDetailsStart());
		try {
			const res = await client.get(`/search/${movieId}`);

			const movie = res.data as Movie;

			dispatch(fetchSingleMovieDetailsSuccess(movie));
		} catch (err: any) {
			dispatch(fetchSingleMovieDetailsFailure(err.message));
		}
	};

export const fetchSingleMovieDetailsRating =
	(movieId: number) => async (dispatch: AppDispatch) => {
		dispatch(fetchSingleMovieDetailsRatingStart());
		try {
			const res = await client.get(`/ratings/${movieId}`);

			const rating = res.data as Rating;

			dispatch(fetchSingleMovieDetailsRatingSuccess(rating));
		} catch (err: any) {
			dispatch(fetchSingleMovieDetailsRatingFailure(err.message));
		}
	};

export const rateMovie =
	(movieId: number, rating: number) => async (dispatch: AppDispatch) => {
		dispatch(rateMovieStart());
		try {
			const { data } = await client.post('/ratings', {
				movieId,
				rating,
			});

			dispatch(rateMovieSuccess(data));
		} catch (err: any) {
			dispatch(rateMovieFailure(err.message));
		}
	};

export const changeMovieRating =
	(movieId: number, rating: number) => async (dispatch: AppDispatch) => {
		dispatch(changeMovieRatingStart());
		try {
			await client.put('/ratings', {
				movieId,
				rating,
			});

			dispatch(changeMovieRatingSuccess(rating));
		} catch (err: any) {
			dispatch(changeMovieRatingFailure(err.message));
		}
	};

export const removeRating = (id: string) => async (dispatch: AppDispatch) => {
	dispatch(removeRatingStart());
	try {
		await client.delete(`/ratings/${id}`);

		dispatch(removeRatingSuccess());
	} catch (err: any) {
		dispatch(removeRatingFailure(err.message));
	}
};

export const fetchNotes =
	(movieId: number) => async (dispatch: AppDispatch) => {
		try {
			const res = await client.get(`/notes/${movieId}`);

			dispatch(fetchNotesSuccess(res.data));
		} catch (err: any) {
			dispatch(fetchNotesFailure(err.message));
		}
	};

export const addNotes =
	(movieId: number, notes: string) => async (dispatch: AppDispatch) => {
		dispatch(addNotesStart());
		try {
			const res = await client.post('/notes', { movieId, notes });

			dispatch(addNotesSuccess(res.data));
		} catch (err: any) {
			dispatch(addNotesFailure(err.message));
		}
	};

export const changeNotes =
	(movieId: number, notes: string) => async (dispatch: AppDispatch) => {
		dispatch(changeNotesStart());
		try {
			await client.put('/notes', { movieId, notes });

			dispatch(changeNotesSuccess(notes));
		} catch (err: any) {
			dispatch(changeNotesFailure(err.message));
		}
	};

export const removeNotes = (id: string) => async (dispatch: AppDispatch) => {
	dispatch(removeNotesStart());
	try {
		await client.delete(`/notes/${id}`);
		dispatch(removeNotesSuccess());
	} catch (err: any) {
		dispatch(removeNotesFailure(err.message));
	}
};

export const selectMovieDetailsMovie = (state: RootState) =>
	state.movieDetails.movie;
export const selectMovieDetailsMovieCleared = (state: RootState) =>
	state.movieDetails.cleared;

export const {
	fetchSingleMovieDetailsStart,
	fetchSingleMovieDetailsSuccess,
	fetchSingleMovieDetailsFailure,
	fetchSingleMovieDetailsRatingStart,
	fetchSingleMovieDetailsRatingSuccess,
	fetchSingleMovieDetailsRatingFailure,
	rateMovieStart,
	rateMovieSuccess,
	rateMovieFailure,
	changeMovieRatingStart,
	changeMovieRatingSuccess,
	changeMovieRatingFailure,
	removeRatingStart,
	removeRatingSuccess,
	removeRatingFailure,
	fetchNotesStart,
	fetchNotesSuccess,
	fetchNotesFailure,
	addNotesStart,
	addNotesSuccess,
	addNotesFailure,
	changeNotesStart,
	changeNotesSuccess,
	changeNotesFailure,
	removeNotesStart,
	removeNotesSuccess,
	removeNotesFailure,
	clearMovieDetails,
} = movieDetailsSlice.actions;

export const movieDetailsReducer = movieDetailsSlice.reducer;
