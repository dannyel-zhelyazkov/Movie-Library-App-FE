import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, Movie, RootState } from '../..';
import { client } from '../../../client';
import { MovieDetailsState, Rating } from './types';

const initialState: MovieDetailsState = {
	isLoading: false,
	movie: {
		movieDetails: null,
		rating: {
			id: '',
			rating: null,
		},
		notes: null,
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
			state.movie = { ...state.movie, movieDetails: action.payload };
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
			state.movie = { ...state.movie, rating: action.payload };
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
			state.movie = { ...state.movie, rating: action.payload };
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
			state.movie = {
				...state.movie,
				rating: { ...state.movie.rating, rating: action.payload },
			};
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
			state.movie = {
				...state.movie,
				rating: initialState.movie.rating,
			};
		},
		removeRatingFailure: (state, action) => {
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
		} catch (err) {
			dispatch(fetchSingleMovieDetailsFailure(err));
		}
	};

export const fetchSingleMovieDetailsRating =
	(movieId: number) => async (dispatch: AppDispatch) => {
		dispatch(fetchSingleMovieDetailsRatingStart());
		try {
			const res = await client.get(`/ratings/${movieId}`);

			const rating = res.data as Rating;

			dispatch(fetchSingleMovieDetailsRatingSuccess(rating));
		} catch (err) {
			dispatch(fetchSingleMovieDetailsRatingFailure(err));
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
		} catch (err) {
			dispatch(rateMovieFailure(err));
		}
	};

export const changeMovieRating =
	(movieId: number, rating: number) => async (dispatch: AppDispatch) => {
		dispatch(changeMovieRatingStart());

		try {
			const { data } = await client.put('/ratings', {
				movieId,
				rating,
			});

			dispatch(changeMovieRatingSuccess(data.rating));
		} catch (err) {
			dispatch(changeMovieRatingFailure(err));
		}
	};

export const removeRating = (id: string) => async (dispatch: AppDispatch) => {
	dispatch(removeRatingStart());
	try {
		await client.delete(`/ratings/${id}`);

		dispatch(removeRatingSuccess());
	} catch (err) {
		dispatch(removeRatingFailure(err));
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
	clearMovieDetails,
} = movieDetailsSlice.actions;

export const movieDetailsReducer = movieDetailsSlice.reducer;
